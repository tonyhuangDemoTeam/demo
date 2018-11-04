package com.xxxx.pb.demo.sa.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xxxx.pb.demo.sa.persistence.entity.UserEntitlement;

public interface UserEntitlementRepository extends JpaRepository<UserEntitlement, Integer> {
    public List<UserEntitlement> getByUserId(String userId);
}
