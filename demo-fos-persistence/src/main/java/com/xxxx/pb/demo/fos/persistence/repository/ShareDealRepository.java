package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.ShareDeal;

public interface ShareDealRepository extends JpaRepository<ShareDeal, Integer>{
    public List<ShareDeal> getByCustomerNumberAndAccountNumber(Integer customerNumber, Integer accountNumber);
    
    public List<ShareDeal> getByCustomerNumber(Integer customerNumber);
    
    @Query(value = "select s from ShareDeal s, RmCustomerMap m where s.customerNumber=m.customerNumber and m.rmCode=?1")
    public List<ShareDeal> findByRM(String rm);
}
