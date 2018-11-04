package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BOND_POSITION")
public class BondPosition {
    @Id
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "CUSTOMER_NUMBER", nullable = false)
    private Integer customerNumber;

    @Column(name = "ACCOUNT_NUMBER", nullable = false)
    private Integer accountNumber;

    @Column(name = "BOND_ISSUE_CODE", length = 20)
    private String bondIssueCode;

    @Column(name = "BOND_CURRENCY", length = 3)
    private String bondCurrency;

    @Column(name = "ACCRUED_INTEREST", precision = 15, scale = 4)
    private BigDecimal accruedInterest;

    @Column(name = "AVERAGE_PRICE", precision = 10, scale = 2)
    private BigDecimal averagePrice;

    @Column(name = "HOLDING_QUANTITY", precision = 15, scale = 2)
    private BigDecimal holdingQuantity;

    @Column(name = "CONSIDERATION_AMOUNT", precision = 15, scale = 2)
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
}
