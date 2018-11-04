package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;

public interface RmService {
    public Map<String, RelationshipManagerDetail> getAllRelationshipManagers();

    public Map<String, List<RmCustomerMapDetail>> getAllCustomers();
}
