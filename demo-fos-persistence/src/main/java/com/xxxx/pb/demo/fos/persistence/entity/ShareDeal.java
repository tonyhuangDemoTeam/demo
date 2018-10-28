package com.xxxx.pb.demo.fos.persistence.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SHARE_DEAL")
public class ShareDeal {
	@Id
    @Column(name = "ID", nullable = false)
	private Integer id;
	
	@Column(name = "DEAL_NUMBER", nullable = false)
	private Integer dealNumber;
	
	@Column(name = "CUSTOMER_NUMBER", nullable = false)
	private Integer customerNumber;
	
	@Column(name = "ACCOUNT_NUMBER", nullable = false)
	private Integer accountNumber;
	
	@Column(name = "SHARE_ISSUE_CODE", length = 20)
	private String shareIssueCode;
	
	@Column(name = "TRANSACTION_TYPE", length = 1)
	private String transactionType;
	
	@Column(name = "SHARE_CURRENCY", length = 3)
	private String shareCurrency;
	
	@Column(name = "SHARE_PRICE", precision = 10, scale = 2)
	private BigDecimal sharePrice;
	
	@Column(name = "SHARE_QUANTITY", precision = 15, scale = 2)
	private BigDecimal shareQuantity;
	
	@Column(name = "CONSIDERATION_AMOUNT", precision = 15, scale = 2)
	private BigDecimal considerationAmount;
	
	@Column(name = "TRADE_DATE")
	private Date tradeDate;
	
	@Column(name = "VALUE_DATE")
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

	public String getShareIssueCode() {
		return shareIssueCode;
	}

	public void setShareIssueCode(String shareIssueCode) {
		this.shareIssueCode = shareIssueCode;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getShareCurrency() {
		return shareCurrency;
	}

	public void setShareCurrency(String shareCurrency) {
		this.shareCurrency = shareCurrency;
	}

	public BigDecimal getSharePrice() {
		return sharePrice;
	}

	public void setSharePrice(BigDecimal sharePrice) {
		this.sharePrice = sharePrice;
	}

	public BigDecimal getShareQuantity() {
		return shareQuantity;
	}

	public void setShareQuantity(BigDecimal shareQuantity) {
		this.shareQuantity = shareQuantity;
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
