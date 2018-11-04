package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.RateDetail;
import com.xxxx.pb.demo.fos.service.client.RatePersistenceClient;

@Service
public class FXServiceImpl implements FXService {
    
    @Autowired
    private RatePersistenceClient ratePersistenceClient;

    @Override
    public Map<String, BigDecimal> getRates() {
        Map<String, BigDecimal> result = new HashMap<String, BigDecimal>();
        List<RateDetail> rates = ratePersistenceClient.getAll();
        for (RateDetail rate : rates) {
            result.put(rate.getCcy(), rate.getRate());
        }

        return result;
    }

    @Override
    public BigDecimal getRate(String ccy) {
        return getRates().get(ccy);
    }

}
