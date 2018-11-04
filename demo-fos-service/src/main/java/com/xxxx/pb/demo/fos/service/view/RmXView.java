package com.xxxx.pb.demo.fos.service.view;

import java.util.List;

import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;

public class RmXView extends RelationshipManagerDetail {
    private List<CustomerXView> customers;

    public List<CustomerXView> getCustomers() {
        return customers;
    }

    public void setCustomers(List<CustomerXView> customers) {
        this.customers = customers;
    }
}
