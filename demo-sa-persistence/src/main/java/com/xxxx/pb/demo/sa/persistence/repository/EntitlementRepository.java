package com.xxxx.pb.demo.sa.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xxxx.pb.demo.sa.persistence.entity.Entitlement;

public interface EntitlementRepository extends JpaRepository<Entitlement, String> {

}
