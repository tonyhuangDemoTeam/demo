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

    private Map<String, BigDecimal> rates = null;

    @Override
    public Map<String, BigDecimal> getRates() {
        if (rates == null) {
            rates = new HashMap<String, BigDecimal>();

            List<RateDetail> temp = ratePersistenceClient.getAll();
            for (RateDetail rate : temp) {
                rates.put(rate.getCcy(), rate.getRate());
            }
        }

        return rates;
    }

    @Override
    public BigDecimal getRate(String ccy) {
        return getRates().get(ccy);
    }

}
