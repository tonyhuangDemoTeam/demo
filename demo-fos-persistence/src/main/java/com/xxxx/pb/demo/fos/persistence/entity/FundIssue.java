package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FUND_ISSUE")
public class FundIssue {
    @Id
    @Column(name = "FUND_ISSUE_CODE", nullable = false, length = 20)
    private String fundIssueCode;

    @Column(name = "FUND_ISSUE_NAME", length = 200)
    private String fundIssueName;

    @Column(name = "FUND_COUNTRY", length = 3)
    private String fundCountry;

    @Column(name = "ISSUER_CODE", length = 30)
    private String issuerCode;

    @Column(name = "FUND_PRICE", precision = 10, scale = 2)
    private BigDecimal fundPrice;
    
    @Column(name = "PREVIOUS_FUND_PRICE", precision = 10, scale = 2)
    private BigDecimal previousFundPrice;

    @Column(name = "FUND_CURRENCY", length = 3)
    private String fundCurrency;

    @Column(name = "CREDIT_RATING")
    private String creditRating;

    public String getFundIssueCode() {
        return fundIssueCode;
    }

    public void setFundIssueCode(String fundIssueCode) {
        this.fundIssueCode = fundIssueCode;
    }

    public String getFundIssueName() {
        return fundIssueName;
    }

    public void setFundIssueName(String fundIssueName) {
        this.fundIssueName = fundIssueName;
    }

    public String getFundCountry() {
        return fundCountry;
    }

    public void setFundCountry(String fundCountry) {
        this.fundCountry = fundCountry;
    }

    public String getIssuerCode() {
        return issuerCode;
    }

    public void setIssuerCode(String issuerCode) {
        this.issuerCode = issuerCode;
    }

    public BigDecimal getFundPrice() {
        return fundPrice;
    }

    public void setFundPrice(BigDecimal fundPrice) {
        this.fundPrice = fundPrice;
    }

    public BigDecimal getPreviousFundPrice() {
        return previousFundPrice;
    }

    public void setPreviousFundPrice(BigDecimal previousFundPrice) {
        this.previousFundPrice = previousFundPrice;
    }

    public String getFundCurrency() {
        return fundCurrency;
    }

    public void setFundCurrency(String fundCurrency) {
        this.fundCurrency = fundCurrency;
    }

    public String getCreditRating() {
        return creditRating;
    }

    public void setCreditRating(String creditRating) {
        this.creditRating = creditRating;
    }
}
