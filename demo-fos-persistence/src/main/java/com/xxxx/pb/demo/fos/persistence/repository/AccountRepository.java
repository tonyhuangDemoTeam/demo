package com.xxxx.pb.demo.fos.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xxxx.pb.demo.fos.persistence.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Integer>{

}
