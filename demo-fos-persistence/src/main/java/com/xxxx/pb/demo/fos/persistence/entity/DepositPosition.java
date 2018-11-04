package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DEPOSIT_POSITION")
public class DepositPosition {
    @Id
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "CUSTOMER_NUMBER", nullable = false)
    private Integer customerNumber;

    @Column(name = "ACCOUNT_NUMBER", nullable = false)
    private Integer accountNumber;

    @Column(name = "CURRENCY", length = 3)
    private String currency;

    @Column(name = "HOLDING_QUANTITY", precision = 15, scale = 2)
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
