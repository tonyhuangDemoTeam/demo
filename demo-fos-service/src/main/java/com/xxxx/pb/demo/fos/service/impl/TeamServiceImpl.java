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
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.detail.CustomerDetail;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;
import com.xxxx.pb.demo.fos.detail.RelationshipManagerDetail;
import com.xxxx.pb.demo.fos.detail.RmCustomerMapDetail;
import com.xxxx.pb.demo.fos.detail.RmTeamDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.detail.TeamRmMapDetail;
import com.xxxx.pb.demo.fos.service.client.RmTeamPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.AccountXView;
import com.xxxx.pb.demo.fos.service.view.ArchView;
import com.xxxx.pb.demo.fos.service.view.CustomerXView;
import com.xxxx.pb.demo.fos.service.view.RmXView;
import com.xxxx.pb.demo.fos.service.view.TeamXView;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private RmTeamPersistenceClient rmTeamPersistenceClient;

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

        for (RmTeamDetail team : teams) {
            TeamXView teamView = new TeamXView();
            result.add(teamView);

            teamView.setTeamCode(team.getTeamCode());
            teamView.setTeamName(team.getTeamName());
            teamView.setBookingEntity(team.getBookingEntity());

            List<RmXView> rmViews = new ArrayList<>();
            teamView.setRms(rmViews);

            for (TeamRmMapDetail teamRM : teamRmMap.get(team.getTeamCode())) {
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

                for (RmCustomerMapDetail rmCustMapDetail : rmCustMap.get(rm.getRmCode())) {
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

                    for (AccountDetail acct : accountMap.get(cust.getCustomerNumber())) {
                        AccountXView acctView = new AccountXView();
                        acctViews.add(acctView);

                        acctView.setId(acct.getId());
                        acctView.setCustomerNumber(acct.getCustomerNumber());
                        acctView.setAccountNumber(acct.getAccountNumber());
                        acctView.setAccountName(acct.getAccountName());
                        acctView.setCreateDate(acct.getCreateDate());

                        String key = new StringBuilder(acct.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(acct.getAccountNumber().toString()).toString();

                        acctView.setBonds(bondService.prepareView(bondPositionMap.get(key)));

                        acctView.setDeposits(depositService.prepareView(depositPositionMap.get(key)));

                        acctView.setFunds(fundService.prepareView(fundPositionMap.get(key)));

                        acctView.setShares(shareService.prepareView(sharePositionMap.get(key)));
                    }
                }
            }
        }

        return result;
    }

    @Override
    public Map<String, List<TeamRmMapDetail>> getAllRelationshipManagers() {
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

    @Override
    public List<ArchView> getArch() {
        List<ArchView> result = new ArrayList<>();
        
        List<RmTeamDetail> teams = rmTeamPersistenceClient.getAll();
        
        Map<String, List<TeamRmMapDetail>> teamRmMap = getAllRelationshipManagers();

        Map<String, RelationshipManagerDetail> rmMap = rmService.getAllRelationshipManagers();

        Map<String, List<RmCustomerMapDetail>> rmCustMap = rmService.getAllCustomers();

        Map<Integer, List<AccountDetail>> accountMap = accountService.getAllAccounts();

        Map<String, List<BondPositionDetail>> bondPositionMap = bondService.getAllPositions();

        Map<String, List<DepositPositionDetail>> depositPositionMap = depositService.getAllPositions();

        Map<String, List<SharePositionDetail>> sharePositionMap = shareService.getAllPositions();

        Map<String, List<FundPositionDetail>> fundPositionMap = fundService.getAllPositions();
        
        Map<String, List<RmTeamDetail>> teamMap = new HashMap<String, List<RmTeamDetail>>();
        for(RmTeamDetail team: teams) {
            List<RmTeamDetail> entities = teamMap.get(team.getBookingEntity());
            
            if(entities == null) {
                entities = new ArrayList<RmTeamDetail>();
                teamMap.put(team.getBookingEntity(), entities);
            }
            
            entities.add(team);
        }
        
        for(String entity: teamMap.keySet()) {
            ArchView entityArch = new ArchView();
            entityArch.setName(entity);
            int entityClients = 0;
            BigDecimal entityPosition = new BigDecimal(0);
            List<ArchView> subTeams = new ArrayList<>();
            entityArch.setEntries(subTeams);
            
            for(RmTeamDetail subTeam: teamMap.get(entity)) {
                ArchView teamArch = new ArchView();
                teamArch.setName(subTeam.getTeamName());
                int teamClients = 0;
                BigDecimal teamPosition = new BigDecimal(0);
                List<ArchView> rms = new ArrayList<>();
                teamArch.setEntries(rms);
                
                for(TeamRmMapDetail teamRmRelationship: teamRmMap.get(subTeam.getTeamCode())) {
                    ArchView rm = new ArchView();
                    rm.setName(rmMap.get(teamRmRelationship.getRmCode()).getRmName());
                    int rmClients = 0;
                    BigDecimal rmPosition = new BigDecimal(0);
                    List<ArchView> custs = new ArrayList<>();
                    rm.setEntries(custs);
                    
                    for(RmCustomerMapDetail rmCustRelationship: rmCustMap.get(teamRmRelationship.getRmCode())) {
                        entityClients++;
                        teamClients++;
                        rmClients++;
                        
                        for(AccountDetail acct: accountMap.get(rmCustRelationship.getCustomerNumber())) {
                            String key = new StringBuilder(acct.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(acct.getAccountNumber().toString()).toString();
                        
                            List<BondPositionDetail> bonds = bondPositionMap.get(key);
                            for(BondPositionDetail bond: bonds) {
                                BigDecimal position = bondService.getPosition(bond);
                                rmPosition = rmPosition.add(position);
                                teamPosition = teamPosition.add(position);
                                entityPosition = entityPosition.add(position);
                            }
                            
                            List<DepositPositionDetail> deposits = depositPositionMap.get(key);
                            for(DepositPositionDetail deposit: deposits) {
                                BigDecimal position = depositService.getPosition(deposit);
                                rmPosition = rmPosition.add(position);
                                teamPosition = teamPosition.add(position);
                                entityPosition = entityPosition.add(position);
                            }
                            
                            List<SharePositionDetail> shares = sharePositionMap.get(key);
                            for(SharePositionDetail share: shares) {
                                BigDecimal position = shareService.getPosition(share);
                                rmPosition = rmPosition.add(position);
                                teamPosition = teamPosition.add(position);
                                entityPosition = entityPosition.add(position);
                            }
                            
                            List<FundPositionDetail> funds = fundPositionMap.get(key);
                            for(FundPositionDetail fund: funds) {
                                BigDecimal position = fundService.getPosition(fund);
                                rmPosition = rmPosition.add(position);
                                teamPosition = teamPosition.add(position);
                                entityPosition = entityPosition.add(position);
                            }
                        }
                    }
                    
                    rm.setClients(rmClients);
                    rm.setPosition(rmPosition);
                    
                    rms.add(rm);
                }
                
                teamArch.setClients(teamClients);
                teamArch.setPosition(teamPosition);
                
                subTeams.add(teamArch);
            }
            
            entityArch.setClients(entityClients);
            entityArch.setPosition(entityPosition);
            
            result.add(entityArch);
        }
        
        return result;
    }
}
