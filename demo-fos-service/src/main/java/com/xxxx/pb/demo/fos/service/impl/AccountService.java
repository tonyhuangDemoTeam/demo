package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.service.view.ProfileView;

public interface AccountService {
    public Map<Integer, List<AccountDetail>> getAllAccounts();

    public List<AccountDetail> getAccountsByCustomer(Integer cust);
    
    public ProfileView getAccountPositions(Integer cust, Integer acct);
}
