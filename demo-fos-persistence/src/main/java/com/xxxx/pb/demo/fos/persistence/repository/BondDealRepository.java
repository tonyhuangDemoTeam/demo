package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.BondDeal;

public interface BondDealRepository extends JpaRepository<BondDeal, Integer>{
    public List<BondDeal> getByCustomerNumberAndAccountNumber(Integer customerNumber, Integer accountNumber);
    
    public List<BondDeal> getByCustomerNumber(Integer customerNumber);
    
    @Query(value = "select b from BondDeal b, RmCustomerMap m where b.customerNumber=m.customerNumber and m.rmCode=?1")
    public List<BondDeal> findByRM(String rm);
}
