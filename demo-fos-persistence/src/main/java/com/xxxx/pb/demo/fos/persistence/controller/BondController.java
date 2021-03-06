package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.BondDealDetail;
import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.persistence.repository.BondDealRepository;
import com.xxxx.pb.demo.fos.persistence.repository.BondIssueRepository;
import com.xxxx.pb.demo.fos.persistence.repository.BondPositionRepository;

@RestController
@RequestMapping(value = "/bond")
public class BondController {
    @Autowired
    private BondDealRepository bondDealRepository;

    @Autowired
    private BondIssueRepository bondIssueRepository;

    @Autowired
    private BondPositionRepository bondPositionRepository;

    @RequestMapping(value = "/deal/get", params = "type=all", method = RequestMethod.GET)
    public List<BondDealDetail> getAllDeals() throws SystemException {
        return CopyHelper.copy(bondDealRepository.findAll(), BondDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=cust", method = RequestMethod.GET)
    public List<BondDealDetail> getDealsByCust(Integer cust) throws SystemException {
        return CopyHelper.copy(bondDealRepository.getByCustomerNumber(cust), BondDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=cust_acct", method = RequestMethod.GET)
    public List<BondDealDetail> getDealsByCustAndAcct(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(bondDealRepository.getByCustomerNumberAndAccountNumber(cust, acct), BondDealDetail.class);
    }

    @RequestMapping(value = "/deal/get", params = "type=rm", method = RequestMethod.GET)
    public List<BondDealDetail> getDealsByRm(String rm) throws SystemException {
        return CopyHelper.copy(bondDealRepository.findByRm(rm), BondDealDetail.class);
    }

    @RequestMapping(value = "/issue/get", method = RequestMethod.GET)
    public List<BondIssueDetail> getAllIssues() throws SystemException {
        return CopyHelper.copy(bondIssueRepository.findAll(), BondIssueDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=all", method = RequestMethod.GET)
    public List<BondPositionDetail> getPositions() throws SystemException {
        return CopyHelper.copy(bondPositionRepository.findAll(), BondPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust", method = RequestMethod.GET)
    public List<BondPositionDetail> getPositions(Integer cust) throws SystemException {
        return CopyHelper.copy(bondPositionRepository.getByCustomerNumber(cust), BondPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust_acct", method = RequestMethod.GET)
    public List<BondPositionDetail> getPositions(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(bondPositionRepository.getByCustomerNumberAndAccountNumber(cust, acct), BondPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust_acct_issue", method = RequestMethod.GET)
    public BondPositionDetail getPosition(Integer cust, Integer acct, String issue) throws SystemException {
        return CopyHelper.copy(bondPositionRepository.getByCustomerNumberAndAccountNumberAndBondIssueCode(cust, acct, issue), BondPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=rm", method = RequestMethod.GET)
    public List<BondPositionDetail> getPositionsByRm(String rm) throws SystemException {
        return CopyHelper.copy(bondPositionRepository.findByRm(rm), BondPositionDetail.class);
    }
}
