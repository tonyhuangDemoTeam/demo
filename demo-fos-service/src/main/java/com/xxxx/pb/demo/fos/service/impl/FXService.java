package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.Map;

public interface FXService {
    public Map<String, BigDecimal> getRates();
    
    public Map<String, BigDecimal> getPreviousRates();

    public BigDecimal getRate(String ccy);
}
