package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.FundIssueDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;
import com.xxxx.pb.demo.fos.service.client.FundPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.FundPositionXView;

@Service
public class FundServiceImpl implements FundService {

    @Autowired
    private FXService fxService;

    @Autowired
    private FundPersistenceClient fundPersistenceClient;

    private Map<String, FundIssueDetail> issues = null;

    @Override
    public Map<String, FundIssueDetail> getAllIssues() {
        if (issues == null) {
            List<FundIssueDetail> temp = fundPersistenceClient.getAllIssues();
            issues = new HashMap<String, FundIssueDetail>();
            for (FundIssueDetail issue : temp) {
                issues.put(issue.getFundIssueCode(), issue);
            }
        }

        return issues;
    }

    public List<FundPositionDetail> getPositions(){
        return fundPersistenceClient.getPositions();
    }
    
    @Override
    public Map<String, List<FundPositionDetail>> getAllPositions() {
        List<FundPositionDetail> fundPositions = fundPersistenceClient.getPositions();
        Map<String, List<FundPositionDetail>> fundPositionMap = new HashMap<String, List<FundPositionDetail>>();
        for (FundPositionDetail fundPosition : fundPositions) {
            String key = new StringBuilder(fundPosition.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(fundPosition.getAccountNumber().toString()).toString();
            List<FundPositionDetail> temp = fundPositionMap.get(key);
            if (temp == null) {
                temp = new ArrayList<>();
                fundPositionMap.put(key, temp);
            }
            temp.add(fundPosition);
        }

        return fundPositionMap;
    }

    @Override
    public List<FundPositionXView> getAccountPositions(Integer cust, Integer acct) {
        return prepareView(fundPersistenceClient.getPositions(cust, acct));
    }

    @Override
    public List<FundPositionDetail> getPositions(Integer cust, Integer acct) {
        return fundPersistenceClient.getPositions(cust, acct);
    }

    @Override
    public List<FundPositionXView> prepareView(List<FundPositionDetail> funds) {
        List<FundPositionXView> result = new ArrayList<>();

        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, FundIssueDetail> fundIssues = getAllIssues();

        if (funds != null && funds.size() > 0) {
            for (FundPositionDetail fund : funds) {
                FundPositionXView view = new FundPositionXView();
                result.add(view);

                view.setId(fund.getId());
                view.setCustomerNumber(fund.getCustomerNumber());
                view.setAccountNumber(fund.getAccountNumber());
                view.setFundIssueCode(fund.getFundIssueCode());
                view.setFundCurrency(fund.getFundCurrency());
                view.setAveragePrice(fund.getAveragePrice());
                view.setHoldingQuantity(fund.getHoldingQuantity());
                view.setConsiderationAmount(fund.getConsiderationAmount());
                view.setPosition(fund.getHoldingQuantity().multiply(fundIssues.get(fund.getFundIssueCode()).getFundPrice()).multiply(rates.get(fund.getFundCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
            }
        }

        return result;
    }

    @Override
    public BigDecimal getPosition(FundPositionDetail fund) {
        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, FundIssueDetail> fundIssues = getAllIssues();
        
        return fund.getHoldingQuantity().multiply(fundIssues.get(fund.getFundIssueCode()).getFundPrice()).multiply(rates.get(fund.getFundCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP);
    }

    @Override
    public BigDecimal getPL(FundPositionDetail fund) {
        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, FundIssueDetail> fundIssues = getAllIssues();
        
        return fund.getHoldingQuantity().multiply(fundIssues.get(fund.getFundIssueCode()).getFundPrice().subtract(fund.getAveragePrice())).multiply(rates.get(fund.getFundCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP);
    }

    @Override
    public BigDecimal getYesterdayPL(FundPositionDetail fund) {
        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, FundIssueDetail> fundIssues = getAllIssues();
        
        return fund.getHoldingQuantity().multiply(fundIssues.get(fund.getFundIssueCode()).getPreviousFundPrice().subtract(fund.getAveragePrice())).multiply(rates.get(fund.getFundCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP);
    }

}
