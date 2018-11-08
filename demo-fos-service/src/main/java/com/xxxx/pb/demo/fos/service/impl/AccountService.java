package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.service.view.PositionView;

public interface AccountService {
    public Map<Integer, List<AccountDetail>> getAllAccounts();

    public List<AccountDetail> getAccountsByCustomer(Integer cust);
    
    public Map<String, List<PositionView>> getAccountPositions(Integer cust, Integer acct);
}
