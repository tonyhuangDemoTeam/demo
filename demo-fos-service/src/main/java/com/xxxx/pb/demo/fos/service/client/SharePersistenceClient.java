package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.ShareDealDetail;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/share")
public interface SharePersistenceClient {

    @RequestMapping(value = "/deal/get?type=all")
    public List<ShareDealDetail> getAllDeals();

    @RequestMapping(value = "/deal/get?type=cust")
    public List<ShareDealDetail> getDealsByCust(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/deal/get?type=cust_acct")
    public List<ShareDealDetail> getDealsByCustAndAcct(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/deal/get?type=rm")
    public List<ShareDealDetail> getDealsByRm(@RequestParam("rm") String rm);

    @RequestMapping(value = "/deal/save")
    public boolean saveDeal(ShareDealDetail detail);

    @RequestMapping(value = "/issue/get")
    public List<ShareIssueDetail> getAllIssues();

    @RequestMapping(value = "/position/get?type=all")
    public List<SharePositionDetail> getPositions();

    @RequestMapping(value = "/position/get?type=cust")
    public List<SharePositionDetail> getPositions(@RequestParam("cust") Integer cust);

    @RequestMapping(value = "/position/get?type=cust_acct")
    public List<SharePositionDetail> getPositions(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct);

    @RequestMapping(value = "/position/get?type=cust_acct_issue")
    public SharePositionDetail getPosition(@RequestParam("cust") Integer cust, @RequestParam("acct") Integer acct, @RequestParam("issue") String issue);

    @RequestMapping(value = "/position/get?type=rm")
    public List<SharePositionDetail> getPositionsByRm(@RequestParam("rm") String rm);

    @RequestMapping(value = "/position/save")
    public boolean savePosition(SharePositionDetail detail);
}
