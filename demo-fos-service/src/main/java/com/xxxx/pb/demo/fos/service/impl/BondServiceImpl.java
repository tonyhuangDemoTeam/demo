package com.xxxx.pb.demo.fos.service.impl;

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

@Service
public class BondServiceImpl implements BondService{
    @Autowired
    private BondPersistenceClient bondPersistenceClient;
    
    @Override
    public Map<String, BondIssueDetail> getAllIssues() {
        List<BondIssueDetail> issues = bondPersistenceClient.getAllIssues();
        Map<String, BondIssueDetail> issueMap = new HashMap<String, BondIssueDetail>();
        for(BondIssueDetail issue: issues) {
            issueMap.put(issue.getBondIssueCode(), issue);
        }
        
        return issueMap;
    }

    @Override
    public Map<String, List<BondPositionDetail>> getAllPositions() {
        List<BondPositionDetail> bondPositions = bondPersistenceClient.getAllPosition();
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
}
