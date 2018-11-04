package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.BondDealDetail;
import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/bond")
public interface BondPersistenceClient {

    @RequestMapping(value = "/deal/get?type=all")
    public List<BondDealDetail> getAllDeals();

    @RequestMapping(value = "/deal/get?type=cust")
    public List<BondDealDetail> getDealsByCust(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/deal/get?type=cust_acct")
    public List<BondDealDetail> getDealsByCustAndAcct(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/deal/get?type=rm")
    public List<BondDealDetail> getDealsByRm(@RequestParam("rm") String rm);

    @RequestMapping(value = "/issue/get")
    public List<BondIssueDetail> getAllIssues();

    @RequestMapping(value = "/position/get?type=all")
    public List<BondPositionDetail> getAllPosition();

    @RequestMapping(value = "/position/get?type=cust")
    public List<BondPositionDetail> getPositionsByCust(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/position/get?type=cust_acct")
    public BondPositionDetail getPositionByCustAndAcct(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/position/get?type=rm")
    public List<BondPositionDetail> getPositionsByRm(@RequestParam("rm") String rm);
}
