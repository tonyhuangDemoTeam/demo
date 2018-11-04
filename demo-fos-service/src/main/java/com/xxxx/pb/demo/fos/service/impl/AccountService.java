package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.AccountDetail;

public interface AccountService {
    Map<Integer, List<AccountDetail>> getAllAccounts();

    List<AccountDetail> getAccountsByCustomer(Integer cust);
}
