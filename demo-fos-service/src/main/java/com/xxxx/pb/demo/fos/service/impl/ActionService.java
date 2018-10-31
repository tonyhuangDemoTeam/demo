package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;

import com.xxxx.pb.demo.fos.detail.ActionDetail;

public interface ActionService {
    public List<ActionDetail> getActionsByRm(String rm);
    
    public boolean markAction(Integer code);
}
