package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;
import com.xxxx.pb.demo.fos.persistence.repository.RelationshipManagerRepository;

@RestController
@RequestMapping(value="/rm")
public class RelationshipManagerController {
    @Autowired
    private RelationshipManagerRepository relationshipManagerRepository;
    
    @RequestMapping(value="/get", params = "type=all", method=RequestMethod.GET)
    public List<RelationshipManagerDetail> getAll() throws SystemException {
        return CopyHelper.copy(relationshipManagerRepository.findAll(), RelationshipManagerDetail.class); 
    }
    
    @RequestMapping(value="/get", params = "type=rm", method=RequestMethod.GET)
    public RelationshipManagerDetail getByCode(String code) throws SystemException {
        return CopyHelper.copy(relationshipManagerRepository.findById(code), RelationshipManagerDetail.class); 
    }
}
