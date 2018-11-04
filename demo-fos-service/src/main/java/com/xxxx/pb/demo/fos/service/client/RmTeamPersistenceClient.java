package com.xxxx.pb.demo.fos.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.fos.detail.RmTeamDetail;
import com.xxxx.pb.demo.fos.detail.TeamRmMapDetail;

@FeignClient("fos-persistence")
@RequestMapping(value = "/team")
public interface RmTeamPersistenceClient {
    @RequestMapping(value = "/get?type=all")
    public List<RmTeamDetail> getAll();

    @RequestMapping(value = "/get?type=team")
    public RmTeamDetail getByCode(@RequestParam("code") String code);

    @RequestMapping(value = "/get?type=map")
    public List<TeamRmMapDetail> getAllMaps();
}
