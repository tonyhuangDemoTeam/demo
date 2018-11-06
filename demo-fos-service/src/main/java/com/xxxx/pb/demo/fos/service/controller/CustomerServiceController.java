package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.service.impl.CustomerService;
import com.xxxx.pb.demo.fos.service.view.CustomerView;
import com.xxxx.pb.demo.fos.service.view.CustomerXView;

@RestController
@RequestMapping(value = "/cust")
public class CustomerServiceController {
    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "/get", params = "type=all", method = RequestMethod.GET)
    public List<CustomerView> getCustomers() {
        return customerService.getCustomerView();
    }

    @RequestMapping(value = "/get", params = "type=rm", method = RequestMethod.GET)
    public List<CustomerXView> getCustomers(String rm) {
        return customerService.getCustomerView(rm);
    }
}
