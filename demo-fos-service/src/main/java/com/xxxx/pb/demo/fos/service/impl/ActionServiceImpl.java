package com.xxxx.pb.demo.fos.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.ActionDetail;
import com.xxxx.pb.demo.fos.service.client.ActionPersistenceClient;

@Service
public class ActionServiceImpl implements ActionService{

    @Autowired
    private ActionPersistenceClient actionPersistenceClient;
    
    @Override
    public List<ActionDetail> getActionsByRm(String rm) {
        return actionPersistenceClient.getByRm(rm);
    }

    @Override
    public boolean markAction(Integer code) {
        Map<String, Integer> param = new HashMap<String, Integer>();
        param.put("code", code);
        return actionPersistenceClient.mark(param);
    }

}
