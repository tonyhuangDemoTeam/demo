package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.SharePosition;

public interface SharePositionRepository extends JpaRepository<SharePosition, Integer> {
    public SharePosition getByCustomerNumberAndAccountNumber(Integer customerNumber, Integer accountNumber);

    public List<SharePosition> getByCustomerNumber(Integer customerNumber);

    @Query(value = "select s from SharePosition s, RmCustomerMap m where s.customerNumber=m.customerNumber and m.rmCode=?1")
    public List<SharePosition> findByRm(String rm);
}
