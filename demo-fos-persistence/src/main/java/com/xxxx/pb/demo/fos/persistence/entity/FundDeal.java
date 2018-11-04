package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FUND_DEAL")
public class FundDeal {
    @Id
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "DEAL_NUMBER", nullable = false)
    private Integer dealNumber;

    @Column(name = "CUSTOMER_NUMBER", nullable = false)
    private Integer customerNumber;

    @Column(name = "ACCOUNT_NUMBER", nullable = false)
    private Integer accountNumber;

    @Column(name = "FUND_ISSUE_CODE", length = 20)
    private String fundIssueCode;

    @Column(name = "TRANSACTION_TYPE", length = 1)
    private String transactionType;

    @Column(name = "FUND_CURRENCY", length = 3)
    private String fundCurrency;

    @Column(name = "FUND_PRICE", precision = 10, scale = 2)
    private BigDecimal fundPrice;

    @Column(name = "FUND_QUANTITY", precision = 15, scale = 2)
    private BigDecimal fundQuantity;

    @Column(name = "CONSIDERATION_AMOUNT", precision = 15, scale = 2)
    private BigDecimal considerationAmount;

    @Column(name = "TRADE_DATE")
    private Date tradeDate;

    @Column(name = "VALUE_DATE")
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

    public String getFundIssueCode() {
        return fundIssueCode;
    }

    public void setFundIssueCode(String fundIssueCode) {
        this.fundIssueCode = fundIssueCode;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getFundCurrency() {
        return fundCurrency;
    }

    public void setFundCurrency(String fundCurrency) {
        this.fundCurrency = fundCurrency;
    }

    public BigDecimal getFundPrice() {
        return fundPrice;
    }

    public void setFundPrice(BigDecimal fundPrice) {
        this.fundPrice = fundPrice;
    }

    public BigDecimal getFundQuantity() {
        return fundQuantity;
    }

    public void setFundQuantity(BigDecimal fundQuantity) {
        this.fundQuantity = fundQuantity;
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
