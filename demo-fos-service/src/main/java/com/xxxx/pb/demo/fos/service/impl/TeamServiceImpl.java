package com.xxxx.pb.demo.fos.service.impl;

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

                        String key = new StringBuilder(acct.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(acct.getCustomerNumber().toString()).toString();

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
}
