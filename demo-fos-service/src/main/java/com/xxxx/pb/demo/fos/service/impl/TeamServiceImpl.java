package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.detail.CustomerDetail;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.detail.FundIssueDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;
import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;
import com.xxxx.pb.demo.fos.detail.RmTeamDetail;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.detail.TeamRmMapDetail;
import com.xxxx.pb.demo.fos.service.client.RmTeamPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.AccountXView;
import com.xxxx.pb.demo.fos.service.view.BondPositionXView;
import com.xxxx.pb.demo.fos.service.view.CustomerXView;
import com.xxxx.pb.demo.fos.service.view.DepositPositionXView;
import com.xxxx.pb.demo.fos.service.view.FundPositionXView;
import com.xxxx.pb.demo.fos.service.view.RmXView;
import com.xxxx.pb.demo.fos.service.view.SharePositionXView;
import com.xxxx.pb.demo.fos.service.view.TeamXView;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private RmTeamPersistenceClient rmTeamPersistenceClient;
    
    @Autowired
    private FXService fxService;

    @Autowired
    private RmService rmService;
    
    @Autowired
    private CustomerService customerService;
    
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
    public List<TeamXView> getAllTeamInfos() {
        List<TeamXView> result = new ArrayList<>();
        
        List<RmTeamDetail> teams = rmTeamPersistenceClient.getAll();

        Map<String, List<TeamRmMapDetail>> teamRmMap = getAllRelationshipManagers();

        Map<String, RelationshipManagerDetail> rmMap = rmService.getAllRelationshipManagers();

        Map<String, List<RmCustomerMapDetail>> rmCustMap = rmService.getAllCustomers();
        
        Map<Integer, CustomerDetail> custMap = customerService.getCustomers();

        Map<Integer, List<AccountDetail>> accountMap = accountService.getAllAccounts();

        Map<String, List<BondPositionDetail>> bondPositionMap = bondService.getAllPositions();

        Map<String, List<DepositPositionDetail>> depositPositionMap = depositService.getAllPositions();

        Map<String, List<SharePositionDetail>> sharePositionMap = shareService.getAllPositions();

        Map<String, List<FundPositionDetail>> fundPositionMap = fundService.getAllPositions();
        
        Map<String, BigDecimal> rates = fxService.getRates();

        Map<String, BondIssueDetail> bondIssues = bondService.getAllIssues();
        
        Map<String, ShareIssueDetail> shareIssues = shareService.getAllIssues();
        
        Map<String, FundIssueDetail> fundIssues = fundService.getAllIssues();
        
        for(RmTeamDetail team: teams) {
            TeamXView teamView = new TeamXView();
            result.add(teamView);
            
            teamView.setTeamCode(team.getTeamCode());
            teamView.setTeamName(team.getTeamName());
            teamView.setBookingEntity(team.getBookingEntity());
            
            List<RmXView> rmViews = new ArrayList<>();
            teamView.setRms(rmViews);
            
            for(TeamRmMapDetail teamRM: teamRmMap.get(team.getTeamCode())) {
                RmXView rmView = new RmXView();
                rmViews.add(rmView);
                
                RelationshipManagerDetail rm = rmMap.get(teamRM.getRmCode());
                rmView.setRmCode(rm.getRmCode());
                rmView.setRmName(rm.getRmName());
                rmView.setPhoneNumber(rm.getPhoneNumber());
                rmView.setEmailAddress(rm.getEmailAddress());
                rmView.setHomeCountry(rm.getHomeCountry());
                
                List<CustomerXView> customerViews = new ArrayList<>();
                rmView.setCustomers(customerViews);
                
                for(RmCustomerMapDetail rmCustMapDetail: rmCustMap.get(rm.getRmCode())) {
                    CustomerXView customerView = new CustomerXView();
                    customerViews.add(customerView);
                    
                    CustomerDetail cust = custMap.get(rmCustMapDetail.getCustomerNumber());
                    customerView.setCustomerNumber(cust.getCustomerNumber());
                    customerView.setCustomerName(cust.getCustomerName());
                    customerView.setType(cust.getType());
                    customerView.setAge(cust.getAge());
                    customerView.setHomeCountry(cust.getHomeCountry());
                    
                    List<AccountXView> acctViews = new ArrayList<>();
                    customerView.setAccounts(acctViews);
                    
                    for(AccountDetail acct: accountMap.get(cust.getCustomerNumber())) {
                        AccountXView acctView = new AccountXView();
                        acctViews.add(acctView);

                        acctView.setId(acct.getId());
                        acctView.setCustomerNumber(acct.getCustomerNumber());
                        acctView.setAccountNumber(acct.getAccountNumber());
                        acctView.setAccountName(acct.getAccountName());
                        acctView.setCreateDate(acct.getCreateDate());
                        
                        String key = new StringBuilder(acct.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(acct.getCustomerNumber().toString()).toString();
                        
                        List<BondPositionXView> bondPositionViews = new ArrayList<>();
                        acctView.setBonds(bondPositionViews);
                        List<BondPositionDetail> bonds = bondPositionMap.get(key);
                        if(bonds!=null && bonds.size()>0) {
                            for(BondPositionDetail bond: bonds) {
                                BondPositionXView view = new BondPositionXView();
                                bondPositionViews.add(view);
                                
                                view.setId(bond.getId());
                                view.setCustomerNumber(bond.getCustomerNumber());
                                view.setAccountNumber(bond.getAccountNumber());
                                view.setBondIssueCode(bond.getBondIssueCode());
                                view.setBondCurrency(bond.getBondCurrency());
                                view.setAccruedInterest(bond.getAccruedInterest());
                                view.setAveragePrice(bond.getAveragePrice());
                                view.setHoldingQuantity(bond.getHoldingQuantity());
                                view.setConsiderationAmount(bond.getConsiderationAmount());
                                view.setPosition(bond.getHoldingQuantity().multiply(bondIssues.get(bond.getBondIssueCode()).getBondPrice()).multiply(rates.get(bond.getBondCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
                            }
                        }
                        
                        List<DepositPositionXView> depositPositionViews = new ArrayList<>();
                        acctView.setDeposits(depositPositionViews);
                        List<DepositPositionDetail> deposits = depositPositionMap.get(key);
                        if(deposits!=null && deposits.size()>0) {
                            for(DepositPositionDetail depoist: deposits) {
                                DepositPositionXView view = new DepositPositionXView();
                                depositPositionViews.add(view);

                                view.setId(depoist.getId());
                                view.setCustomerNumber(depoist.getCustomerNumber());
                                view.setAccountNumber(depoist.getAccountNumber());
                                view.setCurrency(depoist.getCurrency());
                                view.setHoldingQuantity(depoist.getHoldingQuantity());
                                view.setPosition(depoist.getHoldingQuantity().multiply(rates.get(depoist.getCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
                            }
                        }
                        
                        List<FundPositionXView> fundPositionViews = new ArrayList<>();
                        acctView.setFunds(fundPositionViews);
                        List<FundPositionDetail> funds = fundPositionMap.get(key);
                        if(funds!=null && funds.size()>0) {
                            for(FundPositionDetail fund: funds) {
                                FundPositionXView view = new FundPositionXView();
                                fundPositionViews.add(view);
                                
                                view.setId(fund.getId());
                                view.setCustomerNumber(fund.getCustomerNumber());
                                view.setAccountNumber(fund.getAccountNumber());
                                view.setFundIssueCode(fund.getFundIssueCode());
                                view.setFundCurrency(fund.getFundCurrency());
                                view.setAveragePrice(fund.getAveragePrice());
                                view.setHoldingQuantity(fund.getHoldingQuantity());
                                view.setConsiderationAmount(fund.getConsiderationAmount());
                                view.setPosition(fund.getHoldingQuantity().multiply(fundIssues.get(fund.getFundIssueCode()).getFundPrice()).multiply(rates.get(fund.getFundCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
                            }
                        }
                        
                        List<SharePositionXView> sharePositionViews = new ArrayList<>();
                        acctView.setShares(sharePositionViews);
                        List<SharePositionDetail> shares = sharePositionMap.get(key);
                        if(shares!=null && shares.size()>0) {
                            for(SharePositionDetail share: shares) {
                                SharePositionXView view = new SharePositionXView();
                                sharePositionViews.add(view);
                                
                                view.setId(share.getId());
                                view.setCustomerNumber(share.getCustomerNumber());
                                view.setAccountNumber(share.getAccountNumber());
                                view.setShareIssueCode(share.getShareIssueCode());
                                view.setShareCurrency(share.getShareCurrency());
                                view.setAveragePrice(share.getAveragePrice());
                                view.setHoldingQuantity(share.getHoldingQuantity());
                                view.setConsiderationAmount(share.getConsiderationAmount());
                                view.setPosition(share.getHoldingQuantity().multiply(shareIssues.get(share.getShareIssueCode()).getSharePrice()).multiply(rates.get(share.getShareCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
                            }
                        }
                    }
                }
            }
        }

        return result;
    }
    
    @Override
    public Map<String, List<TeamRmMapDetail>> getAllRelationshipManagers(){
        List<TeamRmMapDetail> teamRmRelationships = rmTeamPersistenceClient.getAllMaps();
        Map<String, List<TeamRmMapDetail>> teamRmMap = new HashMap<String, List<TeamRmMapDetail>>();
        for (TeamRmMapDetail teamRmRelationship : teamRmRelationships) {
            List<TeamRmMapDetail> temp = teamRmMap.get(teamRmRelationship.getTeamCode());
            if (temp == null) {
                temp = new ArrayList<>();
                teamRmMap.put(teamRmRelationship.getTeamCode(), temp);
            }
            temp.add(teamRmRelationship);
        }
        
        return teamRmMap;
    }
}
