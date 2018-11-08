package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.service.impl.AccountService;
import com.xxxx.pb.demo.fos.service.view.ProfileView;

@RestController
@RequestMapping(value = "/acct")
public class AccountServiceController {
    @Autowired
    private AccountService accountService;

    @RequestMapping(value = "/get", params="type=details", method = RequestMethod.GET)
    public List<AccountDetail> getAccountsByCustomer(Integer cust) {
        return accountService.getAccountsByCustomer(cust);
    }
    
    @RequestMapping(value = "/get", params="type=position", method = RequestMethod.GET)
    public ProfileView getAccountPositions(Integer cust, Integer acct) {
        return accountService.getAccountPositions(cust, acct);
    }
}
