package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.ShareDealDetail;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.persistence.repository.ShareDealRepository;
import com.xxxx.pb.demo.fos.persistence.repository.ShareIssueRepository;
import com.xxxx.pb.demo.fos.persistence.repository.SharePositionRepository;

@RestController
@RequestMapping(value = "/share")
public class ShareController {
    @Autowired
    private ShareDealRepository shareDealRepository;

    @Autowired
    private ShareIssueRepository shareIssueRepository;

    @Autowired
    private SharePositionRepository sharePositionRepository;

    @RequestMapping(value = "/deal/get", params = "type=all", method = RequestMethod.GET)
    public List<ShareDealDetail> getAllDeals() throws SystemException {
        return CopyHelper.copy(shareDealRepository.findAll(), ShareDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=cust", method = RequestMethod.GET)
    public List<ShareDealDetail> getDealsByCust(Integer cust) throws SystemException {
        return CopyHelper.copy(shareDealRepository.getByCustomerNumber(cust), ShareDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=cust_acct", method = RequestMethod.GET)
    public List<ShareDealDetail> getDealsByCustAndAcct(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(shareDealRepository.getByCustomerNumberAndAccountNumber(cust, acct), ShareDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=rm", method = RequestMethod.GET)
    public List<ShareDealDetail> getDealsByRm(String rm) throws SystemException {
        return CopyHelper.copy(shareDealRepository.findByRm(rm), ShareDealDetail.class);
    }

    @RequestMapping(value = "/issue/get", method = RequestMethod.GET)
    public List<ShareIssueDetail> getAllIssues() throws SystemException {
        return CopyHelper.copy(shareIssueRepository.findAll(), ShareIssueDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=all", method = RequestMethod.GET)
    public List<SharePositionDetail> getAllPosition() throws SystemException {
        return CopyHelper.copy(sharePositionRepository.findAll(), SharePositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust", method = RequestMethod.GET)
    public List<SharePositionDetail> getPositionsByCust(Integer cust) throws SystemException {
        return CopyHelper.copy(sharePositionRepository.getByCustomerNumber(cust), SharePositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust_acct", method = RequestMethod.GET)
    public SharePositionDetail getPositionByCustAndAcct(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(sharePositionRepository.getByCustomerNumberAndAccountNumber(cust, acct), SharePositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=rm", method = RequestMethod.GET)
    public List<SharePositionDetail> getPositionsByRm(String rm) throws SystemException {
        return CopyHelper.copy(sharePositionRepository.findByRm(rm), SharePositionDetail.class);
    }
}
