package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.CustomerDetail;
import com.xxxx.pb.demo.fos.service.view.CustomerView;
import com.xxxx.pb.demo.fos.service.view.CustomerXView;

public interface CustomerService {
    public List<CustomerView> getCustomerView();

    public List<CustomerXView> getCustomerView(String rm);
    
    public List<CustomerXView> getAccounts(String rm);

    public Map<Integer, CustomerDetail> getCustomers();
}
