package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.service.impl.DepositService;
import com.xxxx.pb.demo.fos.service.view.DepositPositionXView;

@RestController
@RequestMapping(value = "/deposit")
public class DepositServiceController {
    @Autowired
    private DepositService depositService;

    @RequestMapping(value = "/position/get", method = RequestMethod.GET)
    public List<DepositPositionXView> getPositions(Integer cust, Integer acct) {
        return depositService.getAccountPositions(cust, acct);
    }
}
