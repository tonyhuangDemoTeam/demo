package com.xxxx.pb.demo.fos.service.view;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.CustomerDetail;

public class CustomerXView extends CustomerDetail {
    private Map<String, Map<String, String>> positions;
    
    private List<AccountXView> accounts;

    public Map<String, Map<String, String>> getPositions() {
        return positions;
    }

    public void setPositions(Map<String, Map<String, String>> positions) {
        this.positions = positions;
    }

    public List<AccountXView> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<AccountXView> accounts) {
        this.accounts = accounts;
    }
}
