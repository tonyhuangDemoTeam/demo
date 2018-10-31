package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
    @Query(value = "select c from Customer c, RmCustomerMap m where c.customerNumber=m.customerNumber and m.rmCode=?1")
    public List<Customer> findByRm(String rm);
}
