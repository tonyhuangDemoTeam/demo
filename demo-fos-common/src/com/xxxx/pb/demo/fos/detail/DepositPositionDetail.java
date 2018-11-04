package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;

public class DepositPositionDetail {
    private Integer id;

    private Integer customerNumber;

    private Integer accountNumber;

    private String currency;

    private BigDecimal holdingQuantity;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(Integer customerNumber) {
        this.customerNumber = customerNumber;
    }

    public Integer getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Integer accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public BigDecimal getHoldingQuantity() {
        return holdingQuantity;
    }

    public void setHoldingQuantity(BigDecimal holdingQuantity) {
        this.holdingQuantity = holdingQuantity;
    }
}
