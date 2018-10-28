package com.xxxx.pb.demo.common.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


import com.xxxx.pb.demo.common.detail.Message;
import com.xxxx.pb.demo.common.exception.FunctionException;
import com.xxxx.pb.demo.common.exception.SystemException;
import com.xxxx.pb.demo.common.exception.ValidationException;

@ControllerAdvice
public class ExceptionHandle {
	private final static Logger logger = LoggerFactory.getLogger(ExceptionHandle.class);
	
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<Message> handleValidationException(ValidationException e){
        logger.error(e.getMessage(), e);
    	
        Message m = new Message(e.getCode(), e.getMessage());
        return new ResponseEntity<Message>(m, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(FunctionException.class)
    public ResponseEntity<Message> handleFunctionException(FunctionException e){
        logger.error(e.getMessage(), e);
    	
    	Message m = new Message(e.getCode(), e.getMessage());
        return new ResponseEntity<Message>(m, HttpStatus.EXPECTATION_FAILED);
    }
    
    @ExceptionHandler(SystemException.class)
    public ResponseEntity<Message> handleSystemException(SystemException e){
        logger.error(e.getMessage(), e);
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Message> handleException(Exception e){
        logger.error(e.getMessage(), e);
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

