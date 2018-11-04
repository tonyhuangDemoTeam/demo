package com.xxxx.pb.demo.sa.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.sa.detail.UserDetail;
import com.xxxx.pb.demo.sa.detail.UserEntitlementDetail;
import com.xxxx.pb.demo.sa.detail.UserRoleDetail;
import com.xxxx.pb.demo.sa.service.client.UserPersistenceClient;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserPersistenceClient userPersistenceClient;

    @Autowired
    private CryptogramService cryptogramService;

    @Override
    public boolean authenticate(String id, String password) throws ValidationException {
        UserDetail u = userPersistenceClient.getUser(id);

        if (u == null) {
            throw new ValidationException(Constant.COED_NOT_EXIST, String.format("user %s not found", id));
        }

        if (Constant.STATUS_DISABLE.equals(u.getStatus())) {
            throw new ValidationException(4003, String.format("user %s is not avaible", id));
        }

        if (!cryptogramService.decrypt(u.getPassword()).equals(password)) {
            u.setFailCounter(u.getFailCounter() + 1);
            u.setUpdateBy(id);
            u.setUpdateTime(new Date());

            if (u.getFailCounter() > 3) {
                u.setStatus(Constant.STATUS_DISABLE);
            }

            userPersistenceClient.saveUser(u);

            throw new ValidationException(4002, "invalid password");
        }

        if (u.getFailCounter() > 0) {
            u.setFailCounter(0);
            u.setUpdateBy(id);
            u.setUpdateTime(new Date());
            userPersistenceClient.saveUser(u);
        }

        return true;
    }

    @Override
    public Map<String, List<String>> getUserInfo(String id) {
        Map<String, List<String>> result = new HashMap<String, List<String>>();
        List<UserRoleDetail> rl = userPersistenceClient.getRole(id);
        List<UserEntitlementDetail> el = userPersistenceClient.getEntitlement(id);

        List<String> rs = new ArrayList<String>();
        List<String> es = new ArrayList<String>();

        for (UserRoleDetail r : rl) {
            rs.add(r.getRoleId());
        }

        for (UserEntitlementDetail e : el) {
            es.add(e.getEntitlementId());
        }

        result.put("role", rs);
        result.put("entitlement", es);

        return result;
    }

}
