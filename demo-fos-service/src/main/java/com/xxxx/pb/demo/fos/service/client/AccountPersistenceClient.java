package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.AccountDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/account")
public interface AccountPersistenceClient {
    @RequestMapping(value = "/get?type=all")
    public List<AccountDetail> getAll();

    @RequestMapping(value = "/get?type=cust")
    public List<AccountDetail> getByCust(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/get?type=cust_acct")
    public AccountDetail getByCustAndAcct(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/get?type=rm")
    public List<AccountDetail> getByRm(@RequestParam("rm") String rm);
}
