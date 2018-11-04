package com.xxxx.pb.demo.fos.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;
import com.xxxx.pb.demo.fos.service.client.RmPersistenceClient;

@Service
public class RmServiceImpl implements RmService {
    @Autowired
    private RmPersistenceClient rmPersistenceClient;

    @Override
    public Map<String, RelationshipManagerDetail> getAllRelationshipManagers() {
        List<RelationshipManagerDetail> rms = rmPersistenceClient.getAll();
        Map<String, RelationshipManagerDetail> rmMap = new HashMap<String, RelationshipManagerDetail>();
        for (RelationshipManagerDetail rm : rms) {
            rmMap.put(rm.getRmCode(), rm);
        }

        return rmMap;
    }

    @Override
    public Map<String, List<RmCustomerMapDetail>> getAllCustomers() {
        List<RmCustomerMapDetail> rmCustRelationships = rmPersistenceClient.getAllCustMaps();
        Map<String, List<RmCustomerMapDetail>> rmCustMap = new HashMap<String, List<RmCustomerMapDetail>>();
        for (RmCustomerMapDetail rmCustRelationship : rmCustRelationships) {
            List<RmCustomerMapDetail> temp = rmCustMap.get(rmCustRelationship.getRmCode());
            if (temp == null) {
                temp = new ArrayList<>();
                rmCustMap.put(rmCustRelationship.getRmCode(), temp);
            }
            temp.add(rmCustRelationship);
        }

        return rmCustMap;
    }

}
