package com.xxxx.pb.demo.fos.detail;

import java.math.BigDecimal;
import java.util.Date;

public class BondDealDetail {
	private Integer dealNumber;
	
	private Integer customerNumber;
	
	private Integer accountNumber;
	
	private String bondIssueCode;
	
	private String transactionType;
	
	private String bondCurrency;
	
	private BigDecimal bondPrice;
	
	private BigDecimal bondQuantity;
	
	private BigDecimal considerationAmount;
	
	private Date tradeDate;
	
	private Date valueDate;

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

	public String getBondIssueCode() {
		return bondIssueCode;
	}

	public void setBondIssueCode(String bondIssueCode) {
		this.bondIssueCode = bondIssueCode;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getBondCurrency() {
		return bondCurrency;
	}

	public void setBondCurrency(String bondCurrency) {
		this.bondCurrency = bondCurrency;
	}

	public BigDecimal getBondPrice() {
		return bondPrice;
	}

	public void setBondPrice(BigDecimal bondPrice) {
		this.bondPrice = bondPrice;
	}

	public BigDecimal getBondQuantity() {
		return bondQuantity;
	}

	public void setBondQuantity(BigDecimal bondQuantity) {
		this.bondQuantity = bondQuantity;
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
