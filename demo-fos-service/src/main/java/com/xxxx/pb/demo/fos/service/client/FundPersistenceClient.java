package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.FundDealDetail;
import com.xxxx.pb.demo.fos.detail.FundIssueDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/fund")
public interface FundPersistenceClient {

    @RequestMapping(value = "/deal/get?type=all")
    public List<FundDealDetail> getAllDeals();

    @RequestMapping(value = "/deal/get?type=cust")
    public List<FundDealDetail> getDealsByCust(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/deal/get?type=cust_acct")
    public List<FundDealDetail> getDealsByCustAndAcct(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/deal/get?type=rm")
    public List<FundDealDetail> getDealsByRm(@RequestParam("rm") String rm);

    @RequestMapping(value = "/issue/get")
    public List<FundIssueDetail> getAllIssues();

    @RequestMapping(value = "/position/get?type=all")
    public List<FundPositionDetail> getAllPosition();

    @RequestMapping(value = "/position/get?type=cust")
    public List<FundPositionDetail> getPositionsByCust(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/position/get?type=cust_acct")
    public FundPositionDetail getPositionByCustAndAcct(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/position/get?type=rm")
    public List<FundPositionDetail> getPositionsByRm(@RequestParam("rm") String rm);
}
