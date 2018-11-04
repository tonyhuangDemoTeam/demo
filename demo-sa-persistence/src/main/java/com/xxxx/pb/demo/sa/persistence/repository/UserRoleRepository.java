package com.xxxx.pb.demo.sa.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xxxx.pb.demo.sa.persistence.entity.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
    public List<UserRole> getByUserId(String userId);
}
