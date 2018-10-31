package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.FundDeal;

public interface FundDealRepository extends JpaRepository<FundDeal, Integer>{
    public List<FundDeal> getByCustomerNumberAndAccountNumber(Integer customerNumber, Integer accountNumber);
    
    public List<FundDeal> getByCustomerNumber(Integer customerNumber);
    
    @Query(value = "select f from FundDeal f, RmCustomerMap m where f.customerNumber=m.customerNumber and m.rmCode=?1")
    public List<FundDeal> findByRm(String rm);
}
