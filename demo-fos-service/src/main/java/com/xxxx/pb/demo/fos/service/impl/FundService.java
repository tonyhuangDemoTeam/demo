package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.FundIssueDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;

public interface FundService {
    public Map<String, FundIssueDetail> getAllIssues();
    
    public Map<String, List<FundPositionDetail>> getAllPositions();
}
