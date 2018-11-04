package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.service.client.BondPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.BondPositionXView;

@Service
public class BondServiceImpl implements BondService {
    @Autowired
    private FXService fxService;

    @Autowired
    private BondPersistenceClient bondPersistenceClient;

    private Map<String, BondIssueDetail> issues = null;

    @Override
    public Map<String, BondIssueDetail> getAllIssues() {
        if (issues == null) {
            List<BondIssueDetail> temp = bondPersistenceClient.getAllIssues();
            issues = new HashMap<String, BondIssueDetail>();
            for (BondIssueDetail issue : temp) {
                issues.put(issue.getBondIssueCode(), issue);
            }
        }

        return issues;
    }

    @Override
    public Map<String, List<BondPositionDetail>> getAllPositions() {
        List<BondPositionDetail> bondPositions = bondPersistenceClient.getPositions();
        Map<String, List<BondPositionDetail>> bondPositionMap = new HashMap<String, List<BondPositionDetail>>();
        for (BondPositionDetail bondPosition : bondPositions) {
            String key = new StringBuilder(bondPosition.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(bondPosition.getCustomerNumber().toString()).toString();
            List<BondPositionDetail> temp = bondPositionMap.get(key);
            if (temp == null) {
                temp = new ArrayList<>();
                bondPositionMap.put(key, temp);
            }
            temp.add(bondPosition);
        }

        return bondPositionMap;
    }

    @Override
    public List<BondPositionXView> getAccountPositions(Integer cust, Integer acct) {
        return prepareView(bondPersistenceClient.getPositions(cust, acct));
    }

    @Override
    public List<BondPositionXView> prepareView(List<BondPositionDetail> bonds) {
        List<BondPositionXView> result = new ArrayList<>();

        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, BondIssueDetail> bondIssues = getAllIssues();

        if (bonds != null && bonds.size() > 0) {
            for (BondPositionDetail bond : bonds) {
                BondPositionXView view = new BondPositionXView();
                result.add(view);

                view.setId(bond.getId());
                view.setCustomerNumber(bond.getCustomerNumber());
                view.setAccountNumber(bond.getAccountNumber());
                view.setBondIssueCode(bond.getBondIssueCode());
                view.setBondCurrency(bond.getBondCurrency());
                view.setAccruedInterest(bond.getAccruedInterest());
                view.setAveragePrice(bond.getAveragePrice());
                view.setHoldingQuantity(bond.getHoldingQuantity());
                view.setConsiderationAmount(bond.getConsiderationAmount());
                view.setPosition(bond.getHoldingQuantity().multiply(bondIssues.get(bond.getBondIssueCode()).getBondPrice()).multiply(rates.get(bond.getBondCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
            }
        }

        return result;
    }
}
