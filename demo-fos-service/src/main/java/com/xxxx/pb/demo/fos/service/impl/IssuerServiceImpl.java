package com.xxxx.pb.demo.fos.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.IssuerDetail;
import com.xxxx.pb.demo.fos.service.client.IssuerPersistenceClient;

@Service
public class IssuerServiceImpl implements IssuerService {

    @Autowired
    private IssuerPersistenceClient issuerPersistenceClient;
    
    private  Map<String, IssuerDetail> issuers;
    
    @Override
    public Map<String, IssuerDetail> getIssuers() {
        if(issuers == null) {
            issuers = new HashMap<String, IssuerDetail>();
            
            List<IssuerDetail> list = issuerPersistenceClient.getAll();
            if(list != null) {
                for(IssuerDetail d: list) {
                    issuers.put(d.getIssuerCode(), d);
                }
            }
        }
        
        return issuers;
    }

}
