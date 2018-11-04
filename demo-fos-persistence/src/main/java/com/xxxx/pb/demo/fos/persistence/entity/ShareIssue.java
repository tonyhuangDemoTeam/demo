package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SHARE_ISSUE")
public class ShareIssue {
    @Id
    @Column(name = "SHARE_ISSUE_CODE", nullable = false, length = 20)
    private String shareIssueCode;

    @Column(name = "SHARE_ISSUE_NAME", length = 200)
    private String shareIssueName;

    @Column(name = "SHARE_COUNTRY", length = 3)
    private String shareCountry;

    @Column(name = "ISSUER_CODE", length = 30)
    private String issueCode;

    @Column(name = "SHARE_PRICE", precision = 10, scale = 2)
    private BigDecimal sharePrice;

    @Column(name = "SHARE_CURRENCY", length = 3)
    private String shareCurrency;

    @Column(name = "RISK_LEVEL")
    private Integer riskLevel;

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

    public String getShareCurrency() {
        return shareCurrency;
    }

    public void setShareCurrency(String shareCurrency) {
        this.shareCurrency = shareCurrency;
    }

    public Integer getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(Integer riskLevel) {
        this.riskLevel = riskLevel;
    }
}
