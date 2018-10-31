package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.detail.ActionDetail;
import com.xxxx.pb.demo.fos.service.impl.ActionService;

@RestController
@RequestMapping(value="/action")
public class ActionServiceController {

    @Autowired
    private ActionService actionService;
    
    @RequestMapping(value="/get", method=RequestMethod.GET)
    public List<ActionDetail> getActionsByRm(String rm) {
        return actionService.getActionsByRm(rm);
    }

    @RequestMapping(value="/mark", method=RequestMethod.POST)
    public boolean markAction(@RequestBody Map<String, Integer> map) {
        return actionService.markAction(map.get("code"));
    }

}
