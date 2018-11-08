package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xxxx.pb.demo.fos.detail.IssuerDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/issuer")
public interface IssuerPersistenceClient {
    
    @RequestMapping(value = "/get?type=all")
    public List<IssuerDetail> getAll();

    @RequestMapping(value = "/get?type=issue")
    public IssuerDetail getByCode(String code);
}
