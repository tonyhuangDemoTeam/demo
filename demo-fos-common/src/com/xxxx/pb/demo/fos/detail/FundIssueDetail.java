package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;

public class FundIssueDetail {
	private String fundIssueCode;
	
	private String fundIssueName;
	
	private String fundCountry;
	
	private String issueCode;
	
	private BigDecimal fundPrice;
	
	private String fundCurrency;
	
	private Integer riskLevel;

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

	public String getIssueCode() {
		return issueCode;
	}

	public void setIssueCode(String issueCode) {
		this.issueCode = issueCode;
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

	public Integer getRiskLevel() {
		return riskLevel;
	}

	public void setRiskLevel(Integer riskLevel) {
		this.riskLevel = riskLevel;
	}
}
