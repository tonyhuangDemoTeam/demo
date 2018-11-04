package com.xxxx.pb.demo.fos.persistence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.util.CopyHelper;
import com.xxxx.pb.demo.fos.detail.CustomerDetail;
import com.xxxx.pb.demo.fos.persistence.repository.CustomerRepository;

@RestController
@RequestMapping(value = "/customer")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @RequestMapping(value = "/get", params = "type=all", method = RequestMethod.GET)
    public List<CustomerDetail> getAll() throws SystemException {
        return CopyHelper.copy(customerRepository.findAll(), CustomerDetail.class);
    }

    @RequestMapping(value = "/get", params = "type=cust", method = RequestMethod.GET)
    public CustomerDetail getByCode(Integer code) throws SystemException {
        return CopyHelper.copy(customerRepository.findById(code), CustomerDetail.class);
    }

    @RequestMapping(value = "/get", params = "type=rm", method = RequestMethod.GET)
    public List<CustomerDetail> getByRm(String rm) throws SystemException {
        return CopyHelper.copy(customerRepository.findByRm(rm), CustomerDetail.class);
    }
}
