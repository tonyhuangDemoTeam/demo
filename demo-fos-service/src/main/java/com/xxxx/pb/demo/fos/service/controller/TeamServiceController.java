package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.service.impl.TeamService;
import com.xxxx.pb.demo.fos.service.view.ArchView;
import com.xxxx.pb.demo.fos.service.view.TeamXView;

@RestController
@RequestMapping(value = "/team")
public class TeamServiceController {
    @Autowired
    private TeamService teamService;

    @RequestMapping(value = "/get", params = "type=details", method = RequestMethod.GET)
    public List<TeamXView> getAllTeamInfos() {
        return teamService.getAllTeamInfos();
    }
    
    @RequestMapping(value = "/get", params = "type=arch", method = RequestMethod.GET)
    public ArchView getArch() {
        return teamService.getArch();
    }
}
