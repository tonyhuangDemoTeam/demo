package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.service.view.BondPositionXView;

public interface BondService {
    public Map<String, BondIssueDetail> getAllIssues();

    public Map<String, List<BondPositionDetail>> getAllPositions();

    public List<BondPositionXView> getAccountPositions(Integer cust, Integer acct);

    public List<BondPositionXView> prepareView(List<BondPositionDetail> bonds);
}
