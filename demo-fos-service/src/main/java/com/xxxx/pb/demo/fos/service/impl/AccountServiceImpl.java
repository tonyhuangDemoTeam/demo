package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.fos.detail.AccountDetail;
import com.xxxx.pb.demo.fos.detail.BondIssueDetail;
import com.xxxx.pb.demo.fos.detail.BondPositionDetail;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.detail.FundIssueDetail;
import com.xxxx.pb.demo.fos.detail.FundPositionDetail;
import com.xxxx.pb.demo.fos.detail.ShareIssueDetail;
import com.xxxx.pb.demo.fos.detail.SharePositionDetail;
import com.xxxx.pb.demo.fos.service.client.AccountPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.PositionView;
import com.xxxx.pb.demo.fos.service.view.ProfileView;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private FXService fxService;
    
    @Autowired
    private AccountPersistenceClient accountPersistenceClient;

    @Autowired
    private BondService bondService;

    @Autowired
    private DepositService depositService;

    @Autowired
    private FundService fundService;

    @Autowired
    private ShareService shareService;
    
    @Override
    public Map<Integer, List<AccountDetail>> getAllAccounts() {
        List<AccountDetail> accounts = accountPersistenceClient.getAll();
        Map<Integer, List<AccountDetail>> accountMap = new HashMap<Integer, List<AccountDetail>>();
        for (AccountDetail account : accounts) {
            List<AccountDetail> temp = accountMap.get(account.getCustomerNumber());
            if (temp == null) {
                temp = new ArrayList<>();
                accountMap.put(account.getCustomerNumber(), temp);
            }
            temp.add(account);
        }

        return accountMap;
    }

    @Override
    public List<AccountDetail> getAccountsByCustomer(Integer cust) {
        return accountPersistenceClient.getByCust(cust);
    }

    @Override
    public ProfileView getAccountPositions(Integer cust, Integer acct) {
        ProfileView result = new ProfileView();
        
        Map<String, List<PositionView>> positionsMap = new HashMap<String, List<PositionView>>();
        result.setPositions(positionsMap);
        
        Map<String, BigDecimal> prodCataInfo = new HashMap<String, BigDecimal>();
        Map<String, BigDecimal> ccyCataInfo = new HashMap<String, BigDecimal>();
        
        Map<String, BondIssueDetail> bondIssues = bondService.getAllIssues();
        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, BigDecimal> xRates = fxService.getPreviousRates();
        Map<String, ShareIssueDetail> shareIssues = shareService.getAllIssues();
        Map<String, FundIssueDetail> fundIssues = fundService.getAllIssues();
        
        List<BondPositionDetail> bonds = bondService.getPositions(cust, acct);
        if(bonds != null && bonds.size()>0) {
            List<PositionView> positions = new ArrayList<>();
            positionsMap.put("bond", positions);
            
            BigDecimal prodPosition = new BigDecimal(0);
            
            for(BondPositionDetail bond: bonds) {
                PositionView position = new PositionView();
                positions.add(position);
                
                BigDecimal amount = bondService.getPosition(bond);
                prodPosition = prodPosition.add(amount);
                
                String ccy = bond.getBondCurrency();
                BigDecimal ccyCataSub = ccyCataInfo.get(ccy);
                if(ccyCataSub == null) {
                    ccyCataSub = new BigDecimal(0);
                }
                ccyCataSub = ccyCataSub.add(amount);
                ccyCataInfo.put(ccy, ccyCataSub);
                
                BondIssueDetail issue = bondIssues.get(bond.getBondIssueCode());
                position.setName(issue.getBondIssueName());
                position.setQuantity(bond.getHoldingQuantity());
                position.setAmount(amount);
                position.setMarketPrice(issue.getBondPrice());
                position.setCost(bond.getAveragePrice());
                position.setAveragePL(bondService.getPL(bond));
                position.setYesterdayPL(bondService.getYesterdayPL(bond));
            }
            
            prodCataInfo.put("bond", prodPosition);
        }
        
        List<DepositPositionDetail> deposits = depositService.getPositions(cust, acct);
        if(deposits != null && deposits.size()>0) {
            List<PositionView> positions = new ArrayList<>();
            positionsMap.put("deposits", positions);
            
            BigDecimal prodPosition = new BigDecimal(0);
            
            for(DepositPositionDetail deposit: deposits) {
                PositionView position = new PositionView();
                positions.add(position);
                
                BigDecimal amount = depositService.getPosition(deposit);
                prodPosition = prodPosition.add(amount);

                String ccy = deposit.getCurrency();
                BigDecimal ccyCataSub = ccyCataInfo.get(ccy);
                if(ccyCataSub == null) {
                    ccyCataSub = new BigDecimal(0);
                }
                ccyCataSub = ccyCataSub.add(amount);
                ccyCataInfo.put(ccy, ccyCataSub);
                
                position.setName(deposit.getCurrency());
                position.setQuantity(deposit.getHoldingQuantity());
                position.setAmount(amount);
                position.setMarketPrice(rates.get(deposit.getCurrency()));
                position.setCost(xRates.get(deposit.getCurrency()));
                position.setAveragePL(depositService.getPL(deposit));
                position.setYesterdayPL(depositService.getYesterdayPL(deposit));
            }
            
            prodCataInfo.put("deposits", prodPosition);
        }
        
        List<FundPositionDetail> funds = fundService.getPositions(cust, acct);
        if(funds != null && funds.size()>0) {
            List<PositionView> positions = new ArrayList<>();
            positionsMap.put("fund", positions);
            
            BigDecimal prodPosition = new BigDecimal(0);
            
            for(FundPositionDetail fund: funds) {
                PositionView position = new PositionView();
                positions.add(position);
                
                BigDecimal amount = fundService.getPosition(fund);
                prodPosition = prodPosition.add(amount);

                String ccy = fund.getFundCurrency();
                BigDecimal ccyCataSub = ccyCataInfo.get(ccy);
                if(ccyCataSub == null) {
                    ccyCataSub = new BigDecimal(0);
                }
                ccyCataSub = ccyCataSub.add(amount);
                ccyCataInfo.put(ccy, ccyCataSub);
                
                FundIssueDetail issue = fundIssues.get(fund.getFundIssueCode());
                position.setName(issue.getFundIssueName());
                position.setQuantity(fund.getHoldingQuantity());
                position.setAmount(amount);
                position.setMarketPrice(issue.getFundPrice());
                position.setCost(fund.getAveragePrice());
                position.setAveragePL(fundService.getPL(fund));
                position.setYesterdayPL(fundService.getYesterdayPL(fund));
            }
            
            prodCataInfo.put("fund", prodPosition);
        }
        
        List<SharePositionDetail> shares = shareService.getPositions(cust, acct);
        if(shares != null && shares.size()>0) {
            List<PositionView> positions = new ArrayList<>();
            positionsMap.put("share", positions);
            
            BigDecimal prodPosition = new BigDecimal(0);
            
            for(SharePositionDetail share: shares) {
                PositionView position = new PositionView();
                positions.add(position);
                
                BigDecimal amount = shareService.getPosition(share);
                prodPosition = prodPosition.add(amount);
                
                String ccy = share.getShareCurrency();
                BigDecimal ccyCataSub = ccyCataInfo.get(ccy);
                if(ccyCataSub == null) {
                    ccyCataSub = new BigDecimal(0);
                }
                ccyCataSub = ccyCataSub.add(amount);
                ccyCataInfo.put(ccy, ccyCataSub);
                
                ShareIssueDetail issue = shareIssues.get(share.getShareIssueCode());
                position.setName(issue.getShareIssueName());
                position.setQuantity(share.getHoldingQuantity());
                position.setAmount(amount);
                position.setMarketPrice(issue.getSharePrice());
                position.setCost(share.getAveragePrice());
                position.setAveragePL(shareService.getPL(share));
                position.setYesterdayPL(shareService.getYesterdayPL(share));
            }
            
            prodCataInfo.put("share", prodPosition);
        }
        

        result.setCcyCataInfo(ccyCataInfo);
        result.setProdCataInfo(prodCataInfo);
        
        return result;
    }

}
