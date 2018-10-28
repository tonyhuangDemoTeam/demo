package com.xxxx.pb.demo.sa.service.impl;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class CryptogramServiceImpl implements CryptogramService{

//	@Value("${cryptogram.key}")
//    private String key;
	
	private static StandardPBEStringEncryptor pbeEncryptor = new StandardPBEStringEncryptor(); 
	
	public CryptogramServiceImpl(@Value("${cryptogram.key}") String key) {
		pbeEncryptor.setPassword(key);
	}
	
	@Override
	public String decrypt(String value) {
		//pbeEncryptor.setPassword(key);
		return pbeEncryptor.decrypt(value);
	}

	@Override
	public String encrypt(String value) {
		//pbeEncryptor.setPassword(key);
		return pbeEncryptor.encrypt(value);
	}
}
