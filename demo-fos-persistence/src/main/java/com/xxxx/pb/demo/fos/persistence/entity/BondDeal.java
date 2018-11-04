package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BOND_DEAL")
public class BondDeal {
    @Id
    @Column(name = "ID", nullable = false)
    private Integer dealNumber;

    @Column(name = "CUSTOMER_NUMBER")
    private Integer customerNumber;

    @Column(name = "ACCOUNT_NUMBER")
    private Integer accountNumber;

    @Column(name = "BOND_ISSUE_CODE", length = 20)
    private String bondIssueCode;

    @Column(name = "TRANSACTION", length = 1)
    private String transactionType;

    @Column(name = "BOND_CURRENCY", length = 3)
    private String bondCurrency;

    @Column(name = "BOND_PRICE", precision = 10, scale = 2)
    private BigDecimal bondPrice;

    @Column(name = "BOND_QUANTITY", precision = 15, scale = 2)
    private BigDecimal bondQuantity;

    @Column(name = "CONSIDERATION_AMOUNT", precision = 15, scale = 2)
    private BigDecimal considerationAmount;

    @Column(name = "TRADE_DATE")
    private Date tradeDate;

    @Column(name = "VALUE_DATE")
    private Date valueDate;

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

    public String getBondIssueCode() {
        return bondIssueCode;
    }

    public void setBondIssueCode(String bondIssueCode) {
        this.bondIssueCode = bondIssueCode;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getBondCurrency() {
        return bondCurrency;
    }

    public void setBondCurrency(String bondCurrency) {
        this.bondCurrency = bondCurrency;
    }

    public BigDecimal getBondPrice() {
        return bondPrice;
    }

    public void setBondPrice(BigDecimal bondPrice) {
        this.bondPrice = bondPrice;
    }

    public BigDecimal getBondQuantity() {
        return bondQuantity;
    }

    public void setBondQuantity(BigDecimal bondQuantity) {
        this.bondQuantity = bondQuantity;
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
