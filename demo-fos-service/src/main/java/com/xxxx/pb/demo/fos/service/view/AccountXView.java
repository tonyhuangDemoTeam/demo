package com.xxxx.pb.demo.fos.service.view;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.AccountDetail;

public class AccountXView extends AccountDetail {
    private Map<String, Map<String, String>> positions;
    
    private List<BondPositionXView> bonds;

    private List<DepositPositionXView> deposits;

    private List<FundPositionXView> funds;

    private List<SharePositionXView> shares;
    
    public Map<String, Map<String, String>> getPositions() {
        return positions;
    }

    public void setPositions(Map<String, Map<String, String>> positions) {
        this.positions = positions;
    }

    public List<BondPositionXView> getBonds() {
        return bonds;
    }

    public void setBonds(List<BondPositionXView> bonds) {
        this.bonds = bonds;
    }

    public List<DepositPositionXView> getDeposits() {
        return deposits;
    }

    public void setDeposits(List<DepositPositionXView> deposits) {
        this.deposits = deposits;
    }

    public List<FundPositionXView> getFunds() {
        return funds;
    }

    public void setFunds(List<FundPositionXView> funds) {
        this.funds = funds;
    }

    public List<SharePositionXView> getShares() {
        return shares;
    }

    public void setShares(List<SharePositionXView> shares) {
        this.shares = shares;
    }
}
