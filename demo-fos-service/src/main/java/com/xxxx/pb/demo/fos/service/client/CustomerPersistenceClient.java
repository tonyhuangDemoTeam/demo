package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.CustomerDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/customer")
public interface CustomerPersistenceClient {

    @RequestMapping(value = "/get?type=all")
    public List<CustomerDetail> getAll();

    @RequestMapping(value = "/get?type=cust")
    public CustomerDetail getByCode(@RequestParam("code") Integer code);

    @RequestMapping(value = "/get?type=rm")
    public List<CustomerDetail> getByRm(@RequestParam("rm") String rm);
}
