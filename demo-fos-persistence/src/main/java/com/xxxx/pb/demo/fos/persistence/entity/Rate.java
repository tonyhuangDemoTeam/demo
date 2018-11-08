package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RATE")
public class Rate {
    @Id
    @Column(name = "ccy", nullable = false, length = 3)
    private String ccy;

    @Column(name = "RATE", precision = 10, scale = 4)
    private BigDecimal rate;
    
    @Column(name = "PREVIOUS_RATE", precision = 10, scale = 4)
    private BigDecimal previousRate;

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

    public BigDecimal getPreviousRate() {
        return previousRate;
    }

    public void setPreviousRate(BigDecimal previousRate) {
        this.previousRate = previousRate;
    }
}
