package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.ShareDealDetail;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.service.client.SharePersistenceClient;
import com.xxxx.pb.demo.fos.service.view.SharePositionXView;
import com.xxxx.pb.demo.fos.util.FOSConstant;

@Service
public class ShareServiceImpl implements ShareService {
    @Autowired
    private FXService fxService;

    @Autowired
    private SharePersistenceClient sharePersistenceClient;

    private Map<String, ShareIssueDetail> issues = null;

    @Override
    public Map<String, ShareIssueDetail> getAllIssues() {
        if (issues == null) {
            List<ShareIssueDetail> temp = sharePersistenceClient.getAllIssues();
            issues = new HashMap<String, ShareIssueDetail>();
            for (ShareIssueDetail issue : temp) {
                issues.put(issue.getShareIssueCode(), issue);
            }
        }
        return issues;
    }

    @Override
    public Map<String, List<SharePositionDetail>> getAllPositions() {
        List<SharePositionDetail> sharePositions = sharePersistenceClient.getPositions();
        Map<String, List<SharePositionDetail>> sharePositionMap = new HashMap<String, List<SharePositionDetail>>();
        for (SharePositionDetail sharePosition : sharePositions) {
            String key = new StringBuilder(sharePosition.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(sharePosition.getAccountNumber().toString()).toString();
            List<SharePositionDetail> temp = sharePositionMap.get(key);
            if (temp == null) {
                temp = new ArrayList<>();
                sharePositionMap.put(key, temp);
            }
            temp.add(sharePosition);
        }

        return sharePositionMap;
    }

    @Override
    public List<SharePositionXView> getAccountPositions(Integer cust, Integer acct) {
        return prepareView(sharePersistenceClient.getPositions(cust, acct));
    }

    @Override
    public List<SharePositionXView> prepareView(List<SharePositionDetail> shares) {
        List<SharePositionXView> result = new ArrayList<>();

        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, ShareIssueDetail> shareIssues = getAllIssues();

        if (shares != null && shares.size() > 0) {
            for (SharePositionDetail share : shares) {
                SharePositionXView view = new SharePositionXView();
                result.add(view);

                view.setId(share.getId());
                view.setCustomerNumber(share.getCustomerNumber());
                view.setAccountNumber(share.getAccountNumber());
                view.setShareIssueCode(share.getShareIssueCode());
                view.setShareCurrency(share.getShareCurrency());
                view.setAveragePrice(share.getAveragePrice());
                view.setHoldingQuantity(share.getHoldingQuantity());
                view.setConsiderationAmount(share.getConsiderationAmount());
                view.setPosition(share.getHoldingQuantity().multiply(shareIssues.get(share.getShareIssueCode()).getSharePrice()).multiply(rates.get(share.getShareCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
            }
        }

        return result;
    }

    @Override
    public boolean saveDeal(ShareDealDetail deal) throws ValidationException {
        SharePositionDetail position = sharePersistenceClient.getPosition(deal.getCustomerNumber(), deal.getAccountNumber(), deal.getShareIssueCode());
        if (FOSConstant.TRANS_TYPE_SELL.equals(deal.getTransactionType())) {
            if (position == null || position.getHoldingQuantity().compareTo(deal.getShareQuantity()) < 0) {
                throw new ValidationException(FOSConstant.CODE_NOT_ENOUGH_POSITION, FOSConstant.ERR_NOT_ENOUGH_POSITION);
            }
        }

        if (position == null) {
            position = new SharePositionDetail();

            position.setCustomerNumber(deal.getCustomerNumber());
            position.setAccountNumber(deal.getAccountNumber());
            position.setShareIssueCode(deal.getShareIssueCode());
            position.setShareCurrency(deal.getShareCurrency());
            position.setAveragePrice(deal.getSharePrice());
            position.setHoldingQuantity(deal.getShareQuantity());
            position.setConsiderationAmount(new BigDecimal(0));
        } else {
            if (FOSConstant.TRANS_TYPE_SELL.equals(deal.getTransactionType())) {
                position.setHoldingQuantity(position.getHoldingQuantity().subtract(deal.getShareQuantity()));
            } else {
                BigDecimal currentAmount = position.getHoldingQuantity().multiply(position.getAveragePrice());
                BigDecimal dealAmount = deal.getShareQuantity().multiply(deal.getSharePrice());
                BigDecimal totalQuantity = position.getHoldingQuantity().add(deal.getShareQuantity());
                BigDecimal totalAmount = currentAmount.add(dealAmount);

                position.setHoldingQuantity(totalQuantity);
                position.setAveragePrice(totalAmount.divide(totalQuantity, 2, BigDecimal.ROUND_HALF_UP));
            }
        }

        sharePersistenceClient.saveDeal(deal);
        sharePersistenceClient.savePosition(position);

        return true;
    }

    @Override
    public BigDecimal getPosition(SharePositionDetail share) {
        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, ShareIssueDetail> shareIssues = getAllIssues();
       
        return share.getHoldingQuantity().multiply(shareIssues.get(share.getShareIssueCode()).getSharePrice()).multiply(rates.get(share.getShareCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP);
    }

}
