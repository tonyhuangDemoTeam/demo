package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;

public class FundPositionDetail {
	private Integer id;
	
	private Integer customerNumber;
	
	private Integer accountNumber;
	
	private String fundIssueCode;
	
	private String fundCurrency;
	
	private BigDecimal averagePrice;
	
	private BigDecimal holdingQuantity;
	
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

	public String getFundIssueCode() {
		return fundIssueCode;
	}

	public void setFundIssueCode(String fundIssueCode) {
		this.fundIssueCode = fundIssueCode;
	}

	public String getFundCurrency() {
		return fundCurrency;
	}

	public void setFundCurrency(String fundCurrency) {
		this.fundCurrency = fundCurrency;
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
