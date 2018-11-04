package com.xxxx.pb.demo.fos.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.service.client.AccountPersistenceClient;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountPersistenceClient accountPersistenceClient;
    
    @Override
    public Map<Integer, List<AccountDetail>> getAllAccounts() {
        List<AccountDetail> accounts = accountPersistenceClient.getAll();
        Map<Integer, List<AccountDetail>> accountMap = new HashMap<Integer, List<AccountDetail>>();
        for (AccountDetail account : accounts) {
            List<AccountDetail> temp = accountMap.get(account.getCustomerNumber());
            if (temp == null) {
                temp = new ArrayList<>();
                accountMap.put(account.getCustomerNumber(), temp);
            }
            temp.add(account);
        }
        
        return accountMap;
    }

}
