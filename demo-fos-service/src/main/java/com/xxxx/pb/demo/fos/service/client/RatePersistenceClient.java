package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.xxxx.pb.demo.fos.detail.RateDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/fx")
public interface RatePersistenceClient {
    @RequestMapping(value = "/rate/get", method = RequestMethod.GET)
    public List<RateDetail> getAll();
}
