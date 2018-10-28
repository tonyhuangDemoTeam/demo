package com.xxxx.pb.demo.sa.persistence.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.sa.detail.UserDetail;
import com.xxxx.pb.demo.sa.detail.UserEntitlementDetail;
import com.xxxx.pb.demo.sa.detail.UserRoleDetail;
import com.xxxx.pb.demo.sa.persistence.entity.User;
import com.xxxx.pb.demo.sa.persistence.entity.UserEntitlement;
import com.xxxx.pb.demo.sa.persistence.entity.UserRole;
import com.xxxx.pb.demo.sa.persistence.repository.UserEntitlementRepository;
import com.xxxx.pb.demo.sa.persistence.repository.UserRepository;
import com.xxxx.pb.demo.sa.persistence.repository.UserRoleRepository;

@RestController
@RequestMapping(value="/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserRoleRepository userRoleRepository;
    
    @Autowired
    private UserEntitlementRepository userEntitlementRepository;
    
    @RequestMapping(value="/get", params = "type=user", method=RequestMethod.GET)
    public UserDetail getUser(String id){
        Optional<User> u = userRepository.findById(id);
        
        Optional<UserDetail> temp = u.flatMap((value) -> {
            UserDetail d = new UserDetail();
            BeanUtils.copyProperties(value, d);
            return Optional.<UserDetail>of(d);
        });
        
        return temp.map((value) -> value).orElse(null);
    }
    
    @RequestMapping(value="/save", method=RequestMethod.POST)
    public boolean saveUser(@RequestBody UserDetail d) throws ValidationException{
        Optional<User> u = userRepository.findById(d.getId());
        
        u.map((value)->{
            BeanUtils.copyProperties(d, value);
            userRepository.save(value);
            return value;}
        ).orElseThrow(() -> new ValidationException(Constant.COED_NOT_EXIST, Constant.ERR_NOT_EXIST));
        
        return true;
    }
    
    @RequestMapping(value="/get", params = "type=role", method=RequestMethod.GET)
    public List<UserRoleDetail> getRole(String id){
        List<UserRoleDetail> l = new ArrayList<>();
        List<UserRole> result = userRoleRepository.getByUserId(id);
        if(result != null && result.size()>0) {
            for(UserRole role: result) {
                UserRoleDetail d = new UserRoleDetail();
                BeanUtils.copyProperties(role, d);
                l.add(d);
            }
        }
        
        return l;
    }
    
    @RequestMapping(value="/get", params = "type=entitlement", method=RequestMethod.GET)
    public List<UserEntitlementDetail> getEntitlement(String id){
        List<UserEntitlementDetail> l = new ArrayList<>();
        List<UserEntitlement> result = userEntitlementRepository.getByUserId(id);
        if(result != null && result.size()>0) {
            for(UserEntitlement role: result) {
                UserEntitlementDetail d = new UserEntitlementDetail();
                BeanUtils.copyProperties(role, d);
                l.add(d);
            }
        }
        return l;
    }
}
