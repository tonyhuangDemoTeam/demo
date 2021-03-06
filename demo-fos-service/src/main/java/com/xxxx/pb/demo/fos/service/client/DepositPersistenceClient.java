package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/deposit")
public interface DepositPersistenceClient {

    @RequestMapping(value = "/position/get?type=all")
    public List<DepositPositionDetail> getAllPositions();

    @RequestMapping(value = "/position/get?type=cust")
    public List<DepositPositionDetail> getPositions(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/position/get?type=cust_acct")
    public List<DepositPositionDetail> getPositions(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/position/get?type=cust_acct_ccy")
    public DepositPositionDetail getPosition(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct, @RequestParam("ccy") String ccy);

    @RequestMapping(value = "/position/get?type=rm")
    public List<DepositPositionDetail> getPositionsByRm(@RequestParam("rm") String rm);
}
