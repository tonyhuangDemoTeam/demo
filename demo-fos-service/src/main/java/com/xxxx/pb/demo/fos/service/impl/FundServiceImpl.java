package com.xxxx.pb.demo.fos.service.impl;

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

@Service
public class FundServiceImpl implements FundService{

    @Autowired
    private FundPersistenceClient fundPersistenceClient;
    
    @Override
    public Map<String, FundIssueDetail> getAllIssues() {
        List<FundIssueDetail> issues = fundPersistenceClient.getAllIssues();
        Map<String, FundIssueDetail> issueMap = new HashMap<String, FundIssueDetail>();
        for(FundIssueDetail issue: issues) {
            issueMap.put(issue.getFundIssueCode(), issue);
        }
        
        return issueMap;
    }

    @Override
    public Map<String, List<FundPositionDetail>> getAllPositions() {
        List<FundPositionDetail> fundPositions = fundPersistenceClient.getAllPosition();
        Map<String, List<FundPositionDetail>> fundPositionMap = new HashMap<String, List<FundPositionDetail>>();
        for (FundPositionDetail fundPosition : fundPositions) {
            String key = new StringBuilder(fundPosition.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(fundPosition.getCustomerNumber().toString()).toString();
            List<FundPositionDetail> temp = fundPositionMap.get(key);
            if (temp == null) {
                temp = new ArrayList<>();
                fundPositionMap.put(key, temp);
            }
            temp.add(fundPosition);
        }
        
        return fundPositionMap;
    }

}
