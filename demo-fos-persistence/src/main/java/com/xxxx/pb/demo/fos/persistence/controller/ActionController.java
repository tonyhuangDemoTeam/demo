package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.FunctionException;
import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.ActionDetail;
import com.xxxx.pb.demo.fos.persistence.entity.Action;
import com.xxxx.pb.demo.fos.persistence.repository.ActionRepository;

@RestController
@RequestMapping(value = "/action")
public class ActionController {

    @Autowired
    private ActionRepository actionRepository;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<ActionDetail> getByRm(String rm) throws SystemException {
        return CopyHelper.copy(actionRepository.getByRmCodeAndType(rm, Constant.STATUS_PENDING), ActionDetail.class);
    }

    @RequestMapping(value = "/mark", method = RequestMethod.POST)
    public boolean mark(@RequestBody Map<String, Integer> map) throws FunctionException {
        Optional<Action> a = actionRepository.findById(map.get("code"));
        a.map((value) -> {
            value.setType(Constant.STATUS_MARKED);
            actionRepository.save(value);
            return value;
        }).orElseThrow(() -> new FunctionException(Constant.CODE_NOT_EXIST, Constant.ERR_NOT_EXIST));

        return true;
    }
}
