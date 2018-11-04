package com.xxxx.pb.demo.fos.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.service.client.SharePersistenceClient;

@Service
public class ShareServiceImpl implements ShareService{

    @Autowired
    private SharePersistenceClient sharePersistenceClient;
    
    @Override
    public Map<String, ShareIssueDetail> getAllIssues() {
        List<ShareIssueDetail> issues = sharePersistenceClient.getAllIssues();
        Map<String, ShareIssueDetail> issueMap = new HashMap<String, ShareIssueDetail>();
        for(ShareIssueDetail issue: issues) {
            issueMap.put(issue.getShareIssueCode(), issue);
        }
        
        return issueMap;
    }

    @Override
    public Map<String, List<SharePositionDetail>> getAllPositions() {
        List<SharePositionDetail> sharePositions = sharePersistenceClient.getAllPosition();
        Map<String, List<SharePositionDetail>> sharePositionMap = new HashMap<String, List<SharePositionDetail>>();
        for (SharePositionDetail sharePosition : sharePositions) {
            String key = new StringBuilder(sharePosition.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(sharePosition.getCustomerNumber().toString()).toString();
            List<SharePositionDetail> temp = sharePositionMap.get(key);
            if (temp == null) {
                temp = new ArrayList<>();
                sharePositionMap.put(key, temp);
            }
            temp.add(sharePosition);
        }
        
        return sharePositionMap;
    }

}
