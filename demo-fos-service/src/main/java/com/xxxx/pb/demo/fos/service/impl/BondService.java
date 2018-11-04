package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;

public interface BondService {
    public Map<String, BondIssueDetail> getAllIssues();
    
    public Map<String, List<BondPositionDetail>> getAllPositions();
}
