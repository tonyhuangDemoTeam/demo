package com.xxxx.pb.demo.fos.service.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxxx.pb.demo.fos.service.impl.PositionService;

@RestController
@RequestMapping(value = "/asset")
public class PositionServiceController {
    @Autowired
    private PositionService positionService;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<Map<String, String>> getPositions() {
        return positionService.getPositions();
    }
}
