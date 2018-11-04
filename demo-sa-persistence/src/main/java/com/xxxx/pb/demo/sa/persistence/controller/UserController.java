package com.xxxx.pb.demo.sa.persistence.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.sa.detail.UserDetail;
import com.xxxx.pb.demo.sa.detail.UserEntitlementDetail;
import com.xxxx.pb.demo.sa.detail.UserRoleDetail;
import com.xxxx.pb.demo.sa.persistence.entity.User;
import com.xxxx.pb.demo.sa.persistence.repository.UserEntitlementRepository;
import com.xxxx.pb.demo.sa.persistence.repository.UserRepository;
import com.xxxx.pb.demo.sa.persistence.repository.UserRoleRepository;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private UserEntitlementRepository userEntitlementRepository;

    @RequestMapping(value = "/get", params = "type=user", method = RequestMethod.GET)
    public UserDetail getUser(String id) throws SystemException {
        return CopyHelper.copy(userRepository.findById(id), UserDetail.class);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public boolean saveUser(@RequestBody UserDetail d) throws ValidationException {
        Optional<User> u = userRepository.findById(d.getId());

        u.map((value) -> {
            BeanUtils.copyProperties(d, value);
            userRepository.save(value);
            return value;
        }).orElseThrow(() -> new ValidationException(Constant.CODE_NOT_EXIST, Constant.ERR_NOT_EXIST));

        return true;
    }

    @RequestMapping(value = "/get", params = "type=role", method = RequestMethod.GET)
    public List<UserRoleDetail> getRole(String id) throws SystemException {
        return CopyHelper.copy(userRoleRepository.getByUserId(id), UserRoleDetail.class);
    }

    @RequestMapping(value = "/get", params = "type=entitlement", method = RequestMethod.GET)
    public List<UserEntitlementDetail> getEntitlement(String id) throws SystemException {
        return CopyHelper.copy(userEntitlementRepository.getByUserId(id), UserEntitlementDetail.class);
    }
}
