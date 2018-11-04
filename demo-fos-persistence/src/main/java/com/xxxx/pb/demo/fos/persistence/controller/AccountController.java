package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.persistence.repository.AccountRepository;

@RestController
@RequestMapping(value = "/account")
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;

    @RequestMapping(value = "/get", params = "type=all", method = RequestMethod.GET)
    public List<AccountDetail> getAll() throws SystemException {
        return CopyHelper.copy(accountRepository.findAll(), AccountDetail.class);
    }

    @RequestMapping(value = "/get", params = "type=cust", method = RequestMethod.GET)
    public List<AccountDetail> getByCust(Integer cust) throws SystemException {
        return CopyHelper.copy(accountRepository.getByCustomerNumber(cust), AccountDetail.class);
    }

    @RequestMapping(value = "/get", params = "type=cust_acct", method = RequestMethod.GET)
    public AccountDetail getByCustAndAcct(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(accountRepository.getByCustomerNumberAndAccountNumber(cust, acct), AccountDetail.class);
    }

    @RequestMapping(value = "/get", params = "type=rm", method = RequestMethod.GET)
    public List<AccountDetail> getByRm(String rm) throws SystemException {
        return CopyHelper.copy(accountRepository.findByRm(rm), AccountDetail.class);
    }
}
