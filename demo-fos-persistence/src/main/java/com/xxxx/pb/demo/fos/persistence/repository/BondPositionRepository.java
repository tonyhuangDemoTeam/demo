package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.BondPosition;

public interface BondPositionRepository extends JpaRepository<BondPosition, Integer> {

    public BondPosition getByCustomerNumberAndAccountNumberAndBondIssueCode(Integer customerNumber, Integer accountNumber, String bondIssueCode);

    public List<BondPosition> getByCustomerNumberAndAccountNumber(Integer customerNumber, Integer accountNumber);

    public List<BondPosition> getByCustomerNumber(Integer customerNumber);

    @Query(value = "select p from BondPosition p, RmCustomerMap m where p.customerNumber=m.customerNumber and m.rmCode=?1")
    public List<BondPosition> findByRm(String rm);
}
