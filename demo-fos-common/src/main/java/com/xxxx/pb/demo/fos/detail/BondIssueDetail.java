package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;
import java.util.Date;

public class BondIssueDetail {

    private String bondIssueCode;

    private String bondIssueName;

    private String bondCountry;

    private String issuerCode;

    private Date issueDate;

    private BigDecimal bondPrice;
    
    private BigDecimal previousBondPrice;

    private String bondCurrency;

    private Date bondMaturityDate;

    private BigDecimal bondYield;

    private BigDecimal couponRate;

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
