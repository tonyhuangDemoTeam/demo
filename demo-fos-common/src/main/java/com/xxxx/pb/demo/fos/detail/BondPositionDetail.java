package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;

public class BondPositionDetail {
    private Integer id;

    private Integer customerNumber;

    private Integer accountNumber;

    private String bondIssueCode;

    private String bondCurrency;

    private BigDecimal accruedInterest;

    private BigDecimal averagePrice;

    private BigDecimal holdingQuantity;

    private BigDecimal considerationAmount;

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

    public String getBondIssueCode() {
        return bondIssueCode;
    }

    public void setBondIssueCode(String bondIssueCode) {
        this.bondIssueCode = bondIssueCode;
    }

    public String getBondCurrency() {
        return bondCurrency;
    }

    public void setBondCurrency(String bondCurrency) {
        this.bondCurrency = bondCurrency;
    }

    public BigDecimal getAccruedInterest() {
        return accruedInterest;
    }

    public void setAccruedInterest(BigDecimal accruedInterest) {
        this.accruedInterest = accruedInterest;
    }

    public BigDecimal getAveragePrice() {
        return averagePrice;
    }

    public void setAveragePrice(BigDecimal averagePrice) {
        this.averagePrice = averagePrice;
    }

    public BigDecimal getHoldingQuantity() {
        return holdingQuantity;
    }

    public void setHoldingQuantity(BigDecimal holdingQuantity) {
        this.holdingQuantity = holdingQuantity;
    }

    public BigDecimal getConsiderationAmount() {
        return considerationAmount;
    }

    public void setConsiderationAmount(BigDecimal considerationAmount) {
        this.considerationAmount = considerationAmount;
    }
    
    public BigDecimal getPurePosition() {
        return holdingQuantity.multiply(averagePrice).setScale(2, BigDecimal.ROUND_UP);
    }
}
