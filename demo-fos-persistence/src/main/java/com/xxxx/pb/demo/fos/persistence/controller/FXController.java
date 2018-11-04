package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.RateDetail;
import com.xxxx.pb.demo.fos.persistence.repository.RateRepository;

@RestController
@RequestMapping(value = "/fx")
public class FXController {
    @Autowired
    private RateRepository rateRepository;

    @RequestMapping(value = "/rate/get", method = RequestMethod.GET)
    public List<RateDetail> getAll() throws SystemException {
        return CopyHelper.copy(rateRepository.findAll(), RateDetail.class);
    }
}
