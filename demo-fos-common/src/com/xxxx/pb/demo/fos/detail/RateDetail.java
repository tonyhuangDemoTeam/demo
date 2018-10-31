package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;

public class RateDetail {
    private String ccy;
    
    private BigDecimal rate;

    public String getCcy() {
        return ccy;
    }

    public void setCcy(String ccy) {
        this.ccy = ccy;
    }

    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }
}
