package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.fos.detail.ShareDealDetail;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.service.impl.ShareService;
import com.xxxx.pb.demo.fos.service.view.SharePositionXView;

@RestController
@RequestMapping(value = "/share")
public class ShareServiceController {
    @Autowired
    private ShareService shareService;

    @RequestMapping(value = "/issue/get", method = RequestMethod.GET)
    public Map<String, ShareIssueDetail> getIssues() {
        return shareService.getAllIssues();
    }
    
    @RequestMapping(value = "/position/get", method = RequestMethod.GET)
    public List<SharePositionXView> getPositions(Integer cust, Integer acct) {
        return shareService.getAccountPositions(cust, acct);
    }

    @RequestMapping(value = "/deal/save", method = RequestMethod.POST)
    public boolean saveDeal(@RequestBody ShareDealDetail deal) throws ValidationException {
        return shareService.saveDeal(deal);
    }
}
