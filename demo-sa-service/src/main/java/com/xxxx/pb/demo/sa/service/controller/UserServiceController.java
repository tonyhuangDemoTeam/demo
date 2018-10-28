package com.xxxx.pb.demo.sa.service.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.detail.Message;
import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.sa.service.impl.UserService;

@RestController
@RequestMapping(value="/user")
public class UserServiceController {
	@Autowired
    private UserService userService;
    
    @RequestMapping(value="/authenticate", method=RequestMethod.POST)
    public Message authenticate(@RequestBody AuthRequest request) throws Exception{
    	Message result = new Message();
    	if(userService.authenticate(request.getId(), request.getPassword())) {
    		result.setCode(Constant.COED_SUCCESS);
    	}
        
        return result;
    }
    
    @RequestMapping(value="/info", method=RequestMethod.GET)
    public Map<String, List<String>> authenticate(String id) throws Exception{    	
        return userService.getUserInfo(id);
    }
}
