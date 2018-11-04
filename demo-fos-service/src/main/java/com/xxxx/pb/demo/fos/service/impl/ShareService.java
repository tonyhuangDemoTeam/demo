package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;

public interface ShareService {
    public Map<String, ShareIssueDetail> getAllIssues();
    
    public Map<String, List<SharePositionDetail>> getAllPositions();
}
