package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.persistence.repository.DepositPositionRepository;

@RestController
@RequestMapping(value = "/deposit")
public class DepositController {
    @Autowired
    private DepositPositionRepository depositPositionRepository;

    @RequestMapping(value = "/position/get", params = "type=all", method = RequestMethod.GET)
    public List<DepositPositionDetail> getAllPositions() throws SystemException {
        return CopyHelper.copy(depositPositionRepository.findAll(), DepositPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust", method = RequestMethod.GET)
    public List<DepositPositionDetail> getPositionsByCust(Integer cust) throws SystemException {
        return CopyHelper.copy(depositPositionRepository.getByCustomerNumber(cust), DepositPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=cust_acct", method = RequestMethod.GET)
    public DepositPositionDetail getPositionByCustAndAcct(Integer cust, Integer acct) throws SystemException {
        return CopyHelper.copy(depositPositionRepository.getByCustomerNumberAndAccountNumber(cust, acct), DepositPositionDetail.class);
    }

    @RequestMapping(value = "/position/get", params = "type=rm", method = RequestMethod.GET)
    public List<DepositPositionDetail> getPositionsByRm(String rm) throws SystemException {
        return CopyHelper.copy(depositPositionRepository.findByRm(rm), DepositPositionDetail.class);
    }
}
