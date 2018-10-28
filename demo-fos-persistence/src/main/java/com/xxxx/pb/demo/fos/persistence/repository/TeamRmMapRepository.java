package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xxxx.pb.demo.fos.persistence.entity.TeamRmMap;

public interface TeamRmMapRepository extends JpaRepository<TeamRmMap, Integer>{
    @Query(value = "select RmCustomerMap m where m.teamCode=?1")
    public List<TeamRmMap> findByTeam(String rm);
}
