package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.DepositPosition;

public interface DepositPositionRepository extends JpaRepository<DepositPosition, Integer> {
    public DepositPosition getByCustomerNumberAndAccountNumberAndCurrency(Integer customerNumber, Integer accountNumber, String currency);

    public List<DepositPosition> getByCustomerNumberAndAccountNumber(Integer customerNumber, Integer accountNumber);

    public List<DepositPosition> getByCustomerNumber(Integer customerNumber);

    @Query(value = "select p from DepositPosition p, RmCustomerMap m where p.customerNumber=m.customerNumber and m.rmCode=?1")
    public List<DepositPosition> findByRm(String rm);
}
