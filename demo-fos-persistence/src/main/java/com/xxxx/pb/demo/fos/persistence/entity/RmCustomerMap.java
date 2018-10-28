package com.xxxx.pb.demo.fos.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RM_CUSTOMER_MAP")
public class RmCustomerMap {
	@Id
    @Column(name = "ID", nullable = false)
	private Integer id;
	
	@Column(name = "RM_CODE", nullable = false, length = 6)
	private String rmCode;
	
	@Column(name = "CUSTOMER_NUMBER", nullable = false)
	private Integer customerNumber;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRmCode() {
		return rmCode;
	}

	public void setRmCode(String rmCode) {
		this.rmCode = rmCode;
	}

	public Integer getCustomerNumber() {
		return customerNumber;
	}

	public void setCustomerNumber(Integer customerNumber) {
		this.customerNumber = customerNumber;
	}
}
