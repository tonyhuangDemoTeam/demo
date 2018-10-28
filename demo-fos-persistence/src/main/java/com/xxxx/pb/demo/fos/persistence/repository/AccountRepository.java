package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Integer>{
	
	public Account getByCustomerNumberAndAccountNumber(Integer customerNumber, Integer accountNumber);
	
	public List<Account> getByCustomerNumber(Integer customerNumber);
	
	@Query(value = "select a from Account a, RmCustomerMap m where a.customerNumber=m.customerNumber and m.rmCode=?1")
	List<Account> findByRM(String rm);
}
