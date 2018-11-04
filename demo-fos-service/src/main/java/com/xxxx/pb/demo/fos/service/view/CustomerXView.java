package com.xxxx.pb.demo.fos.service.view;

import java.util.List;

import com.xxxx.pb.demo.fos.detail.CustomerDetail;

public class CustomerXView extends CustomerDetail {
    private List<AccountXView> accounts;

    public List<AccountXView> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<AccountXView> accounts) {
        this.accounts = accounts;
    }
}
