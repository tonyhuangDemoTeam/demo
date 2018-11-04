package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.service.impl.AccountService;

@RestController
@RequestMapping(value = "/acct")
public class AccountServiceController {
    @Autowired
    private AccountService accountService;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<AccountDetail> getAccountsByCustomer(Integer cust) {
        return accountService.getAccountsByCustomer(cust);
    }
}
