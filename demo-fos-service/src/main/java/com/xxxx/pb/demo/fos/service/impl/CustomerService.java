package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;

import com.xxxx.pb.demo.fos.service.view.CustomerView;

public interface CustomerService {
    public List<CustomerView> getCustomers();
    
    public List<CustomerView> getCustomers(String rm);
}
