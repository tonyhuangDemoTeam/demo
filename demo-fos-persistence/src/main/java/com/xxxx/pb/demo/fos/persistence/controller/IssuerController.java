package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.IssuerDetail;
import com.xxxx.pb.demo.fos.persistence.repository.IssuerRepository;

@RestController
@RequestMapping(value = "/issuer")
public class IssuerController {
    @Autowired
    private IssuerRepository issuerRepository;

    @RequestMapping(value = "/get", params = "type=all", method = RequestMethod.GET)
    public List<IssuerDetail> getAll() throws SystemException {
        return CopyHelper.copy(issuerRepository.findAll(), IssuerDetail.class);
    }

    @RequestMapping(value = "/get", params = "type=issue", method = RequestMethod.GET)
    public IssuerDetail getByCode(String code) throws SystemException {
        return CopyHelper.copy(issuerRepository.findById(code), IssuerDetail.class);
    }
}
