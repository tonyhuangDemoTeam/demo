package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BOND_ISSUE")
public class BondIssue {
    @Id
    @Column(name = "BOND_ISSUE_CODE", nullable = false, length = 20)
    private String bondIssueCode;

    @Column(name = "BOND_ISSUE_NAME", length = 200)
    private String bondIssueName;

    @Column(name = "BOND_COUNTRY", length = 3)
    private String bondCountry;

    @Column(name = "ISSUER_CODE", length = 30)
    private String issuerCode;

    @Column(name = "ISSUE_DATE")
    private Date issueDate;

    @Column(name = "BOND_PRICE", precision = 10, scale = 2)
    private BigDecimal bondPrice;
    
    @Column(name = "PREVIOUS_BOND_PRICE", precision = 10, scale = 2)
    private BigDecimal previousBondPrice;

    @Column(name = "BOND_CURRENCY", length = 3)
    private String bondCurrency;

    @Column(name = "BOND_MATURITY_DATE")
    private Date bondMaturityDate;

    @Column(name = "BOND_YIELD", precision = 13, scale = 9)
    private BigDecimal bondYield;

    @Column(name = "COUPON_RATE", precision = 9, scale = 5)
    private BigDecimal couponRate;

    @Column(name = "CREDIT_RATING")
    private String creditRating;

    public String getBondIssueCode() {
        return bondIssueCode;
    }

    public void setBondIssueCode(String bondIssueCode) {
        this.bondIssueCode = bondIssueCode;
    }

    public String getBondIssueName() {
        return bondIssueName;
    }

    public void setBondIssueName(String bondIssueName) {
        this.bondIssueName = bondIssueName;
    }

    public String getBondCountry() {
        return bondCountry;
    }

    public void setBondCountry(String bondCountry) {
        this.bondCountry = bondCountry;
    }

    public String getIssuerCode() {
        return issuerCode;
    }

    public void setIssuerCode(String issuerCode) {
        this.issuerCode = issuerCode;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public BigDecimal getBondPrice() {
        return bondPrice;
    }

    public void setBondPrice(BigDecimal bondPrice) {
        this.bondPrice = bondPrice;
    }

    public BigDecimal getPreviousBondPrice() {
        return previousBondPrice;
    }

    public void setPreviousBondPrice(BigDecimal previousBondPrice) {
        this.previousBondPrice = previousBondPrice;
    }

    public String getBondCurrency() {
        return bondCurrency;
    }

    public void setBondCurrency(String bondCurrency) {
        this.bondCurrency = bondCurrency;
    }

    public Date getBondMaturityDate() {
        return bondMaturityDate;
    }

    public void setBondMaturityDate(Date bondMaturityDate) {
        this.bondMaturityDate = bondMaturityDate;
    }

    public BigDecimal getBondYield() {
        return bondYield;
    }

    public void setBondYield(BigDecimal bondYield) {
        this.bondYield = bondYield;
    }

    public BigDecimal getCouponRate() {
        return couponRate;
    }

    public void setCouponRate(BigDecimal couponRate) {
        this.couponRate = couponRate;
    }

    public String getCreditRating() {
        return creditRating;
    }

    public void setCreditRating(String creditRating) {
        this.creditRating = creditRating;
    }
}
