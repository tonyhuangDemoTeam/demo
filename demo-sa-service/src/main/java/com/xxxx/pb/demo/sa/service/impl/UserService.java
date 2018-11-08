package com.xxxx.pb.demo.sa.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.sa.detail.UserDetail;

public interface UserService {
    public boolean authenticate(String id, String password) throws ValidationException;

    public Map<String, List<String>> getUserInfo(String id);
    
    public UserDetail getUser(String id);
}
