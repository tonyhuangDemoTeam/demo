package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xxxx.pb.demo.fos.persistence.entity.RmCustomerMap;

public interface RmCustomerMapRepository extends JpaRepository<RmCustomerMap, Integer>{
    public List<RmCustomerMap> getByRmCode(String rm);
}
