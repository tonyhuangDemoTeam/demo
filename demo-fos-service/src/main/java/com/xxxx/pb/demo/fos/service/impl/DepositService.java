package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;

public interface DepositService {
    public Map<String, List<DepositPositionDetail>> getAllPositions();
}
