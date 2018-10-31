package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;

@FeignClient("fos-persistence")
public interface RmPersistenceClient {
    @RequestMapping(value="/rm/get?type=all")
    public List<RelationshipManagerDetail> getAll();
    
    @RequestMapping(value="/rm/get?type=rm")
    public RelationshipManagerDetail getByCode(@RequestParam("code") String code);
    
    @RequestMapping(value="/rm/get?type=map")
    public List<RmCustomerMapDetail> getAllCustMaps();
    
    @RequestMapping(value="/get?type=cust")
    public List<RmCustomerMapDetail> getCustMaps(@RequestParam("code") String rm);
}
