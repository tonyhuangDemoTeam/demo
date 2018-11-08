package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;

public class ShareIssueDetail {
    private String shareIssueCode;

    private String shareIssueName;

    private String shareCountry;

    private String issueCode;

    private BigDecimal sharePrice;
    
    private BigDecimal previousSharePrice;

    private String shareCurrency;

    private String houseView;
    
    private String creditRating;
    
    private String solicite;

    public String getShareIssueCode() {
        return shareIssueCode;
    }

    public void setShareIssueCode(String shareIssueCode) {
        this.shareIssueCode = shareIssueCode;
    }

    public String getShareIssueName() {
        return shareIssueName;
    }

    public void setShareIssueName(String shareIssueName) {
        this.shareIssueName = shareIssueName;
    }

    public String getShareCountry() {
        return shareCountry;
    }

    public void setShareCountry(String shareCountry) {
        this.shareCountry = shareCountry;
    }

    public String getIssueCode() {
        return issueCode;
    }

    public void setIssueCode(String issueCode) {
        this.issueCode = issueCode;
    }

    public BigDecimal getSharePrice() {
        return sharePrice;
    }

    public void setSharePrice(BigDecimal sharePrice) {
        this.sharePrice = sharePrice;
    }
    
    public BigDecimal getPreviousSharePrice() {
        return previousSharePrice;
    }

    public void setPreviousSharePrice(BigDecimal previousSharePrice) {
        this.previousSharePrice = previousSharePrice;
    }

    public String getShareCurrency() {
        return shareCurrency;
    }

    public void setShareCurrency(String shareCurrency) {
        this.shareCurrency = shareCurrency;
    }

    public String getHouseView() {
        return houseView;
    }

    public void setHouseView(String houseView) {
        this.houseView = houseView;
    }

    public String getCreditRating() {
        return creditRating;
    }

    public void setCreditRating(String creditRating) {
        this.creditRating = creditRating;
    }

    public String getSolicite() {
        return solicite;
    }

    public void setSolicite(String solicite) {
        this.solicite = solicite;
    }
}
