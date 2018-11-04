package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;
import java.util.Date;

public class ShareDealDetail {
    private Integer id;

    private Integer dealNumber;

    private Integer customerNumber;

    private Integer accountNumber;

    private String shareIssueCode;

    private String transactionType;

    private String shareCurrency;

    private BigDecimal sharePrice;

    private BigDecimal shareQuantity;

    private BigDecimal considerationAmount;

    private Date tradeDate;

    private Date valueDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDealNumber() {
        return dealNumber;
    }

    public void setDealNumber(Integer dealNumber) {
        this.dealNumber = dealNumber;
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

    public String getShareIssueCode() {
        return shareIssueCode;
    }

    public void setShareIssueCode(String shareIssueCode) {
        this.shareIssueCode = shareIssueCode;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getShareCurrency() {
        return shareCurrency;
    }

    public void setShareCurrency(String shareCurrency) {
        this.shareCurrency = shareCurrency;
    }

    public BigDecimal getSharePrice() {
        return sharePrice;
    }

    public void setSharePrice(BigDecimal sharePrice) {
        this.sharePrice = sharePrice;
    }

    public BigDecimal getShareQuantity() {
        return shareQuantity;
    }

    public void setShareQuantity(BigDecimal shareQuantity) {
        this.shareQuantity = shareQuantity;
    }

    public BigDecimal getConsiderationAmount() {
        return considerationAmount;
    }

    public void setConsiderationAmount(BigDecimal considerationAmount) {
        this.considerationAmount = considerationAmount;
    }

    public Date getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(Date tradeDate) {
        this.tradeDate = tradeDate;
    }

    public Date getValueDate() {
        return valueDate;
    }

    public void setValueDate(Date valueDate) {
        this.valueDate = valueDate;
    }
}
