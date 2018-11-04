package com.xxxx.pb.demo.fos.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xxxx.pb.demo.fos.persistence.entity.Action;

public interface ActionRepository extends JpaRepository<Action, Integer> {

    public List<Action> getByRmCodeAndType(String rm, String type);

}
