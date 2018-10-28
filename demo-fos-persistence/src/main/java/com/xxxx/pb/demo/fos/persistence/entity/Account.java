package com.xxxx.pb.demo.fos.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ACCOUNT")
public class Account {
	@Id
    @Column(name = "ID", nullable = false)
	private Integer id;
	
	@Column(name = "CUSTOMER_NUMBER", nullable = false)
	private Integer customerNumber;

	@Column(name = "ACCOUNT_NUMBER", nullable = false)
    private Integer accountNumber;

	@Column(name = "ACCOUNT_NAME", length = 60)
    private String accountName;

	@Column(name = "ACCOUNT_TYPE", length = 60)
    private String accountType;

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

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
}
