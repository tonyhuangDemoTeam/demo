package com.xxxx.pb.demo.fos.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;
import com.xxxx.pb.demo.fos.detail.IssuerDetail;
import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;

@Service
public class PositionServiceImpl implements PositionService {

    @Autowired
    private IssuerService issuerService;

    @Autowired
    private BondService bondService;

    @Autowired
    private DepositService depositService;

    @Autowired
    private FundService fundService;

    @Autowired
    private ShareService shareService;
    
    @Autowired
    private RmService rmService;
    
    @Autowired
    private CustomerService customerService;
    
    @Override
    public List<Map<String, String>> getPositions() {
        List<Map<String, String>> reslut = new ArrayList<Map<String, String>>();
        
        Map<String, IssuerDetail> issuers = issuerService.getIssuers();
        
        List<BondPositionDetail> bondPositions = bondService.getPositions();
        List<DepositPositionDetail> depositPositions = depositService.getPositions();
        List<SharePositionDetail> sharePositions = shareService.getPositions();
        List<FundPositionDetail> fundPositions = fundService.getPositions();
        
        Map<String, BondIssueDetail> bondIssuers = bondService.getAllIssues();
        Map<Integer, RmCustomerMapDetail> rmCustMap = customerService.getRelationshipManagers();
        Map<String, RelationshipManagerDetail> rms = rmService.getAllRelationshipManagers();
        
        for(BondPositionDetail bond: bondPositions) {
            Map<String, String> position = new HashMap<String, String>();
            reslut.add(position);
            
            IssuerDetail issuer = issuers.get(bondIssuers.get(bond.getBondIssueCode()).getIssuerCode());
            
            position.put("product", "bond");
            position.put("region", issuer.getDomicileCountry());
            position.put("currency", bond.getBondCurrency());
            position.put("industry", issuer.getIndustrySector());
            position.put("position", bondService.getPosition(bond).toPlainString());
        }    

        for(DepositPositionDetail depoist: depositPositions) {
            Map<String, String> position = new HashMap<String, String>();
            reslut.add(position);
            
            position.put("product", "depoist");
            position.put("region", rms.get(rmCustMap.get(depoist.getCustomerNumber()).getRmCode()).getHomeCountry());
            position.put("currency", depoist.getCurrency());
            position.put("industry", "Finance");
            position.put("position", depositService.getPosition(depoist).toPlainString());
        }
        
        for(SharePositionDetail share: sharePositions) {
            Map<String, String> position = new HashMap<String, String>();
            reslut.add(position);
            
            IssuerDetail issuer = issuers.get(bondIssuers.get(share.getShareIssueCode()).getIssuerCode());
            
            position.put("product", "share");
            position.put("region", issuer.getDomicileCountry());
            position.put("currency", share.getShareCurrency());
            position.put("industry", issuer.getIndustrySector());
            position.put("position", shareService.getPosition(share).toPlainString());
        }
        
        for(FundPositionDetail fund: fundPositions) {
            Map<String, String> position = new HashMap<String, String>();
            reslut.add(position);
            
            IssuerDetail issuer = issuers.get(bondIssuers.get(fund.getFundIssueCode()).getIssuerCode());
            
            position.put("product", "fund");
            position.put("region", issuer.getDomicileCountry());
            position.put("currency", fund.getFundCurrency());
            position.put("industry", issuer.getIndustrySector());
            position.put("position", fundService.getPosition(fund).toPlainString());
        }    
        
        return reslut;
    }

}
