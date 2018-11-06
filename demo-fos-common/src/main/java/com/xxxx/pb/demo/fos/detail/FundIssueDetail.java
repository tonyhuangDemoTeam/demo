package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;

public class FundIssueDetail {
    private String fundIssueCode;

    private String fundIssueName;

    private String fundCountry;

    private String issuerCode;

    private BigDecimal fundPrice;

    private String fundCurrency;

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
