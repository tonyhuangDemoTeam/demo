package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.FundDealDetail;
import com.xxxx.pb.demo.fos.detail.FundIssueDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;
import com.xxxx.pb.demo.fos.persistence.repository.FundDealRepository;
import com.xxxx.pb.demo.fos.persistence.repository.FundIssueRepository;
import com.xxxx.pb.demo.fos.persistence.repository.FundPositionRepository;

@RestController
@RequestMapping(value = "/fund")
public class FundController {
    @Autowired
    private FundDealRepository fundDealRepository;

    @Autowired
    private FundIssueRepository fundIssueRepository;

    @Autowired
    private FundPositionRepository fundPositionRepository;

    @RequestMapping(value = "/deal/get", params = "type=all", method = RequestMethod.GET)
    public List<FundDealDetail> getAllDeals() throws SystemException {
        return CopyHelper.copy(fundDealRepository.findAll(), FundDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=cust", method = RequestMethod.GET)
    public List<FundDealDetail> getDealsByCust(Integer cust) throws SystemException {
        return CopyHelper.copy(fundDealRepository.getByCustomerNumber(cust), FundDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=cust_acct", method = RequestMethod.GET)
    public List<FundDealDetail> getDealsByCustAndAcct(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(fundDealRepository.getByCustomerNumberAndAccountNumber(cust, acct), FundDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=rm", method = RequestMethod.GET)
    public List<FundDealDetail> getDealsByRm(String rm) throws SystemException {
        return CopyHelper.copy(fundDealRepository.findByRm(rm), FundDealDetail.class);
    }

    @RequestMapping(value = "/issue/get", method = RequestMethod.GET)
    public List<FundIssueDetail> getAllIssues() throws SystemException {
        return CopyHelper.copy(fundIssueRepository.findAll(), FundIssueDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=all", method = RequestMethod.GET)
    public List<FundPositionDetail> getPositions() throws SystemException {
        return CopyHelper.copy(fundPositionRepository.findAll(), FundPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust", method = RequestMethod.GET)
    public List<FundPositionDetail> getPositions(Integer cust) throws SystemException {
        return CopyHelper.copy(fundPositionRepository.getByCustomerNumber(cust), FundPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust_acct", method = RequestMethod.GET)
    public List<FundPositionDetail> getPositions(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(fundPositionRepository.getByCustomerNumberAndAccountNumber(cust, acct), FundPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust_acct_issue", method = RequestMethod.GET)
    public FundPositionDetail getPosition(Integer cust, Integer acct, String issue) throws SystemException {
        return CopyHelper.copy(fundPositionRepository.getByCustomerNumberAndAccountNumberAndFundIssueCode(cust, acct, issue), FundPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=rm", method = RequestMethod.GET)
    public List<FundPositionDetail> getPositionsByRm(String rm) throws SystemException {
        return CopyHelper.copy(fundPositionRepository.findByRm(rm), FundPositionDetail.class);
    }
}
