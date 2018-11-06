package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.service.view.DepositPositionXView;

public interface DepositService {
    public Map<String, List<DepositPositionDetail>> getAllPositions();

    public List<DepositPositionXView> getAccountPositions(Integer cust, Integer acct);

    public List<DepositPositionXView> prepareView(List<DepositPositionDetail> deposits);
    
    public BigDecimal getPosition(DepositPositionDetail deposit);
}
