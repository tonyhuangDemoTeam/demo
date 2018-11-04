package com.xxxx.pb.demo.sa.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xxxx.pb.demo.sa.persistence.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

}
