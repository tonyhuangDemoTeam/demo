package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.RmTeamDetail;
import com.xxxx.pb.demo.fos.detail.TeamRmMapDetail;
import com.xxxx.pb.demo.fos.persistence.repository.RmTeamRepository;
import com.xxxx.pb.demo.fos.persistence.repository.TeamRmMapRepository;

@RestController
@RequestMapping(value="/team")
public class RMTeamController {
    @Autowired
    private RmTeamRepository rmTeamRepository;
    
    @Autowired
    private TeamRmMapRepository teamRmMapRepository;
    
    @RequestMapping(value="/get", params = "type=all", method=RequestMethod.GET)
    public List<RmTeamDetail> getAll() throws SystemException {
        return CopyHelper.copy(rmTeamRepository.findAll(), RmTeamDetail.class); 
    }
    
    @RequestMapping(value="/get", params = "type=team", method=RequestMethod.GET)
    public RmTeamDetail getByCode(String code) throws SystemException {
        return CopyHelper.copy(rmTeamRepository.findById(code), RmTeamDetail.class); 
    }
    
    @RequestMapping(value="/get", params = "type=map", method=RequestMethod.GET)
    public List<TeamRmMapDetail> getByTeam(String team) throws SystemException {
        return CopyHelper.copy(teamRmMapRepository.findByTeam(team), TeamRmMapDetail.class); 
    }
}
