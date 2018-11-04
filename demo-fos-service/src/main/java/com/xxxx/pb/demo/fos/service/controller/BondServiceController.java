package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.service.impl.BondService;
import com.xxxx.pb.demo.fos.service.view.BondPositionXView;

@RestController
@RequestMapping(value = "/bond")
public class BondServiceController {
    @Autowired
    private BondService bondService;

    @RequestMapping(value = "/position/get", method = RequestMethod.GET)
    public List<BondPositionXView> getPositions(Integer cust, Integer acct) {
        return bondService.getAccountPositions(cust, acct);
    }
}
