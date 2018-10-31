package com.xxxx.pb.demo.fos.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.CustomerDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;
import com.xxxx.pb.demo.fos.detail.RmTeamDetail;
import com.xxxx.pb.demo.fos.detail.TeamRmMapDetail;
import com.xxxx.pb.demo.fos.service.client.CustomerPersistenceClient;
import com.xxxx.pb.demo.fos.service.client.RmPersistenceClient;
import com.xxxx.pb.demo.fos.service.client.RmTeamPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.CustomerView;

@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    private RmPersistenceClient rmPersistenceClient;
    
    @Autowired
    private RmTeamPersistenceClient rmTeamPersistenceClient;
    
    @Autowired
    private CustomerPersistenceClient customerPersistenceClient;
    
    @Override
    public List<CustomerView> getCustomers() {
        return prepareView(customerPersistenceClient.getAll(), rmPersistenceClient.getAllCustMaps(), rmTeamPersistenceClient.getAllMaps(), rmTeamPersistenceClient.getAll());
    }

    @Override
    public List<CustomerView> getCustomers(String rm) {
        return prepareView(customerPersistenceClient.getByRm(rm), rmPersistenceClient.getAllCustMaps(), rmTeamPersistenceClient.getAllMaps(), rmTeamPersistenceClient.getAll());
    }
    
    private List<CustomerView> prepareView(List<CustomerDetail> custs, List<RmCustomerMapDetail> rmCustMapList, List<TeamRmMapDetail> teamRmMapList, List<RmTeamDetail> teams){
        List<CustomerView> result = new ArrayList<>();
        
        if(custs!=null && custs.size()>0) {
            Map<Integer, String> rmCustMap = new HashMap<Integer, String>();
            for(RmCustomerMapDetail temp: rmCustMapList) {
                rmCustMap.put(temp.getCustomerNumber(), temp.getRmCode());
            }

            Map<String, String> teamRmMap = new HashMap<String, String>();
            for(TeamRmMapDetail temp: teamRmMapList) {
                teamRmMap.put(temp.getRmCode(), temp.getTeamCode());
            }
            
            Map<String, String> teamMap = new HashMap<String, String>();
            for(RmTeamDetail temp: teams) {
                teamMap.put(temp.getTeamCode(), temp.getBookingEntity());
            }
            
            for(CustomerDetail temp: custs) {
                CustomerView view = new CustomerView();
                view.setCustomerNumber(temp.getCustomerNumber());
                view.setCustomerName(temp.getCustomerName());
                view.setType(temp.getType());
                view.setAge(temp.getAge());
                view.setRegion(temp.getHomeCountry());
                view.setBookingEntity(teamMap.get(teamRmMap.get(rmCustMap.get(temp.getCustomerNumber()))));
                
                result.add(view);
            }
            
        }
        
        return result;
    }
}
