package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;
import java.util.Date;

public class FundDealDetail {
	private Integer id;
	
	private Integer dealNumber;
	
	private Integer customerNumber;
	
	private Integer accountNumber;
	
	private String fundIssueCode;
	
	private String transactionType;
	
	private String fundCurrency;
	
	private BigDecimal fundPrice;
	
	private BigDecimal fundQuantity;
	
	private BigDecimal considerationAmount;
	
	private Date tradeDate;
	
	private Date valueDate;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getDealNumber() {
		return dealNumber;
	}

	public void setDealNumber(Integer dealNumber) {
		this.dealNumber = dealNumber;
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

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getFundCurrency() {
		return fundCurrency;
	}

	public void setFundCurrency(String fundCurrency) {
		this.fundCurrency = fundCurrency;
	}

	public BigDecimal getFundPrice() {
		return fundPrice;
	}

	public void setFundPrice(BigDecimal fundPrice) {
		this.fundPrice = fundPrice;
	}

	public BigDecimal getFundQuantity() {
		return fundQuantity;
	}

	public void setFundQuantity(BigDecimal fundQuantity) {
		this.fundQuantity = fundQuantity;
	}

	public BigDecimal getConsiderationAmount() {
		return considerationAmount;
	}

	public void setConsiderationAmount(BigDecimal considerationAmount) {
		this.considerationAmount = considerationAmount;
	}

	public Date getTradeDate() {
		return tradeDate;
	}

	public void setTradeDate(Date tradeDate) {
		this.tradeDate = tradeDate;
	}

	public Date getValueDate() {
		return valueDate;
	}

	public void setValueDate(Date valueDate) {
		this.valueDate = valueDate;
	}
}
