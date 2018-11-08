package com.xxxx.pb.demo.sa.service.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.sa.detail.UserDetail;
import com.xxxx.pb.demo.sa.service.impl.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserServiceController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public Map<String, String> authenticate(@RequestBody AuthRequest request) throws Exception {
        String id = request.getId();
        
        Map<String, String> result = new HashMap<String, String>();
        if (userService.authenticate(id, request.getPassword())) {
            UserDetail user = userService.getUser(request.getId());

            result.put("id", id);
            result.put("name", user.getName());
            result.put("role", userService.getUserInfo(id).get("role").get(0));
        }

        return result;
    }
//    public Message authenticate(@RequestBody AuthRequest request) throws Exception {
//        Message result = new Message();
//        if (userService.authenticate(request.getId(), request.getPassword())) {
//            result.setCode(Constant.CODE_SUCCESS);
//        }
//
//        return result;
//    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public Map<String, List<String>> getUserInfo(String id) throws Exception {
        return userService.getUserInfo(id);
    }
}
