package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.fos.detail.ShareDealDetail;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.service.view.SharePositionXView;

public interface ShareService {
    public Map<String, ShareIssueDetail> getAllIssues();

    public Map<String, List<SharePositionDetail>> getAllPositions();

    public List<SharePositionXView> getAccountPositions(Integer cust, Integer acct);
    
    public List<SharePositionDetail> getPositions(Integer cust, Integer acct);

    public List<SharePositionXView> prepareView(List<SharePositionDetail> shares);

    public boolean saveDeal(ShareDealDetail deal) throws ValidationException;
    
    public BigDecimal getPosition(SharePositionDetail share);
    
    public BigDecimal getPL(SharePositionDetail share);
    
    public BigDecimal getYesterdayPL(SharePositionDetail share);
}
