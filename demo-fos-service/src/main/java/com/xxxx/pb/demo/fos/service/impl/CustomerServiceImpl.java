package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.detail.CustomerDetail;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;
import com.xxxx.pb.demo.fos.detail.RmTeamDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.detail.TeamRmMapDetail;
import com.xxxx.pb.demo.fos.service.client.CustomerPersistenceClient;
import com.xxxx.pb.demo.fos.service.client.RmPersistenceClient;
import com.xxxx.pb.demo.fos.service.client.RmTeamPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.AccountXView;
import com.xxxx.pb.demo.fos.service.view.CustomerView;
import com.xxxx.pb.demo.fos.service.view.CustomerXView;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private RmPersistenceClient rmPersistenceClient;

    @Autowired
    private RmTeamPersistenceClient rmTeamPersistenceClient;

    @Autowired
    private CustomerPersistenceClient customerPersistenceClient;

    @Autowired
    private AccountService accountService;

    @Autowired
    private BondService bondService;

    @Autowired
    private DepositService depositService;

    @Autowired
    private FundService fundService;

    @Autowired
    private ShareService shareService;
    
    @Override
    public List<CustomerView> getCustomerView() {
        return prepareView(customerPersistenceClient.getAll(), rmPersistenceClient.getAllCustMaps(), rmTeamPersistenceClient.getAllMaps(), rmTeamPersistenceClient.getAll());
    }

    @Override
    public List<CustomerXView> getCustomerView(String rm) {
        List<CustomerXView> result = new ArrayList<>();
        
        List<CustomerDetail> custs = customerPersistenceClient.getByRm(rm);
        Map<Integer, List<AccountDetail>> accountMap = accountService.getAllAccounts();
        Map<String, List<BondPositionDetail>> bondPositionMap = bondService.getAllPositions();
        Map<String, List<DepositPositionDetail>> depositPositionMap = depositService.getAllPositions();
        Map<String, List<SharePositionDetail>> sharePositionMap = shareService.getAllPositions();
        Map<String, List<FundPositionDetail>> fundPositionMap = fundService.getAllPositions();
        
        for(CustomerDetail cust: custs) {
            CustomerXView custView = new CustomerXView();
            result.add(custView);
            
            custView.setCustomerNumber(cust.getCustomerNumber());
            custView.setCustomerName(cust.getCustomerName());
            custView.setType(cust.getType());
            custView.setAge(cust.getAge());
            custView.setHomeCountry(cust.getHomeCountry());

            List<AccountXView> acctViews = new ArrayList<>();
            custView.setAccounts(acctViews);
            
            Map<String, String> custCcyPositions = new HashMap<String, String>();
            Map<String, String> custProdPositions = new HashMap<String, String>();
            
            Map<String, Map<String, String>> custPositions = new HashMap<String, Map<String, String>>();
            custPositions.put("ccy", custCcyPositions);
            custPositions.put("prod", custProdPositions);
            
            custView.setPositions(custPositions);
            
            for (AccountDetail acct : accountMap.get(cust.getCustomerNumber())) {
                AccountXView acctView = new AccountXView();
                acctViews.add(acctView);

                acctView.setId(acct.getId());
                acctView.setCustomerNumber(acct.getCustomerNumber());
                acctView.setAccountNumber(acct.getAccountNumber());
                acctView.setAccountName(acct.getAccountName());
                acctView.setCreateDate(acct.getCreateDate());
                
                Map<String, String> acctCcyPositions = new HashMap<String, String>();
                Map<String, String> acctProdPositions = new HashMap<String, String>();
                
                Map<String, Map<String, String>> acctPositions = new HashMap<String, Map<String, String>>();
                acctPositions.put("ccy", acctCcyPositions);
                acctPositions.put("prod", acctProdPositions);
                
                acctView.setPositions(acctPositions);

                String key = new StringBuilder(acct.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(acct.getAccountNumber().toString()).toString();

                List<BondPositionDetail> bonds = bondPositionMap.get(key);
                for(BondPositionDetail bond: bonds) {
                    setPosition("bond", acctCcyPositions, acctProdPositions, bond.getBondCurrency(), bond.getPurePosition(), bondService.getPosition(bond));
                    setPosition("bond", custCcyPositions, custProdPositions, bond.getBondCurrency(), bond.getPurePosition(), bondService.getPosition(bond));
                }
                
                List<DepositPositionDetail> deposits = depositPositionMap.get(key);
                for(DepositPositionDetail deposit: deposits) {
                    setPosition("deposit", acctCcyPositions, acctProdPositions, deposit.getCurrency(), deposit.getHoldingQuantity(), depositService.getPosition(deposit));
                    setPosition("deposit", custCcyPositions, custProdPositions, deposit.getCurrency(), deposit.getHoldingQuantity(), depositService.getPosition(deposit));
                }
                
                List<SharePositionDetail> shares = sharePositionMap.get(key);
                for(SharePositionDetail share: shares) {
                    setPosition("share", acctCcyPositions, acctProdPositions, share.getShareCurrency(), share.getPurePosition(), shareService.getPosition(share));
                    setPosition("share", custCcyPositions, custProdPositions, share.getShareCurrency(), share.getPurePosition(), shareService.getPosition(share));
                }
                
                List<FundPositionDetail> funds = fundPositionMap.get(key);
                for(FundPositionDetail fund: funds) {
                    setPosition("fund", acctCcyPositions, acctProdPositions, fund.getFundCurrency(), fund.getPurePosition(), fundService.getPosition(fund));
                    setPosition("fund", custCcyPositions, custProdPositions, fund.getFundCurrency(), fund.getPurePosition(), fundService.getPosition(fund));
                }
                
                //acctView.setBonds(bondService.prepareView(bondPositionMap.get(key)));
                //acctView.setDeposits(depositService.prepareView(depositPositionMap.get(key)));
                //acctView.setFunds(fundService.prepareView(fundPositionMap.get(key)));
                //acctView.setShares(shareService.prepareView(sharePositionMap.get(key)));
            }
        }
        
        return result;
    }

    @Override
    public Map<Integer, CustomerDetail> getCustomers() {
        List<CustomerDetail> customers = customerPersistenceClient.getAll();
        Map<Integer, CustomerDetail> custMap = new HashMap<Integer, CustomerDetail>();
        for (CustomerDetail cust : customers) {
            custMap.put(cust.getCustomerNumber(), cust);
        }

        return custMap;
    }

    private List<CustomerView> prepareView(List<CustomerDetail> custs, List<RmCustomerMapDetail> rmCustMapList, List<TeamRmMapDetail> teamRmMapList, List<RmTeamDetail> teams) {
        List<CustomerView> result = new ArrayList<>();

        if (custs != null && custs.size() > 0) {
            Map<Integer, String> rmCustMap = new HashMap<Integer, String>();
            for (RmCustomerMapDetail temp : rmCustMapList) {
                rmCustMap.put(temp.getCustomerNumber(), temp.getRmCode());
            }

            Map<String, String> teamRmMap = new HashMap<String, String>();
            for (TeamRmMapDetail temp : teamRmMapList) {
                teamRmMap.put(temp.getRmCode(), temp.getTeamCode());
            }

            Map<String, String> teamMap = new HashMap<String, String>();
            for (RmTeamDetail temp : teams) {
                teamMap.put(temp.getTeamCode(), temp.getBookingEntity());
            }

            Date current = new Date();
            
            for (CustomerDetail temp : custs) {
                CustomerView view = new CustomerView();
                view.setCustomerNumber(temp.getCustomerNumber());
                view.setCustomerName(temp.getCustomerName());
                view.setType(temp.getType());
                view.setAge(temp.getAge());
                view.setRegion(temp.getHomeCountry());
                view.setBookingEntity(teamMap.get(teamRmMap.get(rmCustMap.get(temp.getCustomerNumber()))));
               
                view.setPeriod((current.getTime()-temp.getCreateDate().getTime())/Long.valueOf("31536000000"));

                result.add(view);
            }

        }

        return result;
    }
    
    private void setPosition(String prod, Map<String, String> ccyPositions, Map<String, String> prodPositions, String ccy, BigDecimal purePosition, BigDecimal position)
    {
        String temp = ccyPositions.get(ccy);
        if(temp == null) {
            ccyPositions.put(ccy, purePosition.toPlainString());
        } else {
            ccyPositions.put(ccy, ((new BigDecimal(temp)).add(purePosition)).toPlainString());
        }
        
        temp = prodPositions.get(prod);
        if(temp == null) {
            prodPositions.put(prod, position.toPlainString());
        } else {
            prodPositions.put(prod, ((new BigDecimal(temp)).add(position)).toPlainString());
        }
    }

    @Override
    public List<CustomerXView> getAccounts(String rm) {
        List<CustomerXView> result = new ArrayList<>();
        
        List<CustomerDetail> custs = customerPersistenceClient.getByRm(rm);
        Map<Integer, List<AccountDetail>> accountMap = accountService.getAllAccounts();
        
        for(CustomerDetail cust: custs) {
            CustomerXView custView = new CustomerXView();
            result.add(custView);
            
            custView.setCustomerNumber(cust.getCustomerNumber());
            custView.setCustomerName(cust.getCustomerName());
            
            List<AccountXView> acctViews = new ArrayList<>();
            custView.setAccounts(acctViews);
            
            for (AccountDetail acct : accountMap.get(cust.getCustomerNumber())) {
                AccountXView acctView = new AccountXView();
                acctViews.add(acctView);

                acctView.setId(acct.getId());
                acctView.setCustomerNumber(acct.getCustomerNumber());
                acctView.setAccountNumber(acct.getAccountNumber());
                acctView.setAccountName(acct.getAccountName());
            }
        }
        
        return result;
    }
}
