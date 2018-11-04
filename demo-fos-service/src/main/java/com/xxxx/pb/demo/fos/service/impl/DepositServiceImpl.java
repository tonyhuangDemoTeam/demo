package com.xxxx.pb.demo.fos.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.service.client.DepositPersistenceClient;

@Service
public class DepositServiceImpl implements DepositService{

    @Autowired
    private DepositPersistenceClient depositPersistenceClient;
    
    @Override
    public Map<String, List<DepositPositionDetail>> getAllPositions() {
        List<DepositPositionDetail> depositPositions = depositPersistenceClient.getAllPositions();
        Map<String, List<DepositPositionDetail>> depositPositionMap = new HashMap<String, List<DepositPositionDetail>>();
        for (DepositPositionDetail depositPosition : depositPositions) {
            String key = new StringBuilder(depositPosition.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(depositPosition.getCustomerNumber().toString()).toString();
            List<DepositPositionDetail> temp = depositPositionMap.get(key);
            if (temp == null) {
                temp = new ArrayList<>();
                depositPositionMap.put(key, temp);
            }
            temp.add(depositPosition);
        }
        
        return depositPositionMap;
    }

}
