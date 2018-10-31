package com.xxxx.pb.demo.fos.service.client;

import java.util.List;
import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.ActionDetail;

@FeignClient("fos-persistence")
public interface ActionPersistenceClient {
    @RequestMapping(value="/action/get")
    public List<ActionDetail> getByRm(@RequestParam("rm") String rm);
    
    @RequestMapping(value="/action/mark")
    public boolean mark(Map<String, Integer> map);
}
