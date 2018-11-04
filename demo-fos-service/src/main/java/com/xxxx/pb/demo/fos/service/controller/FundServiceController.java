package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.service.impl.FundService;
import com.xxxx.pb.demo.fos.service.view.FundPositionXView;

@RestController
@RequestMapping(value = "/fund")
public class FundServiceController {
    @Autowired
    private FundService fundService;

    @RequestMapping(value = "/position/get", method = RequestMethod.GET)
    public List<FundPositionXView> getPositions(Integer cust, Integer acct) {
        return fundService.getAccountPositions(cust, acct);
    }
}
