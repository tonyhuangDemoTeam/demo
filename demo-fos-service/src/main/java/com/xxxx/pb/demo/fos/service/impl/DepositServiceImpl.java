package com.xxxx.pb.demo.fos.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxxx.pb.demo.common.util.Constant;
import com.xxxx.pb.demo.fos.detail.DepositPositionDetail;
import com.xxxx.pb.demo.fos.service.client.DepositPersistenceClient;
import com.xxxx.pb.demo.fos.service.view.DepositPositionXView;

@Service
public class DepositServiceImpl implements DepositService {
    @Autowired
    private FXService fxService;

    @Autowired
    private DepositPersistenceClient depositPersistenceClient;

    @Override
    public Map<String, List<DepositPositionDetail>> getAllPositions() {
        List<DepositPositionDetail> depositPositions = depositPersistenceClient.getAllPositions();
        Map<String, List<DepositPositionDetail>> depositPositionMap = new HashMap<String, List<DepositPositionDetail>>();
        for (DepositPositionDetail depositPosition : depositPositions) {
            String key = new StringBuilder(depositPosition.getCustomerNumber().toString()).append(Constant.SYMBOL_LINK).append(depositPosition.getAccountNumber().toString()).toString();
            List<DepositPositionDetail> temp = depositPositionMap.get(key);
            if (temp == null) {
                temp = new ArrayList<>();
                depositPositionMap.put(key, temp);
            }
            temp.add(depositPosition);
        }

        return depositPositionMap;
    }

    @Override
    public List<DepositPositionXView> getAccountPositions(Integer cust, Integer acct) {
        return prepareView(depositPersistenceClient.getPositions(cust, acct));
    }
    
    @Override
    public List<DepositPositionDetail> getPositions(Integer cust, Integer acct) {
        return depositPersistenceClient.getPositions(cust, acct);
    }

    @Override
    public List<DepositPositionXView> prepareView(List<DepositPositionDetail> deposits) {
        List<DepositPositionXView> result = new ArrayList<>();

        Map<String, BigDecimal> rates = fxService.getRates();

        if (deposits != null && deposits.size() > 0) {
            for (DepositPositionDetail deposit : deposits) {
                DepositPositionXView view = new DepositPositionXView();
                result.add(view);

                view.setId(deposit.getId());
                view.setCustomerNumber(deposit.getCustomerNumber());
                view.setAccountNumber(deposit.getAccountNumber());
                view.setCurrency(deposit.getCurrency());
                view.setHoldingQuantity(deposit.getHoldingQuantity());
                view.setPosition(deposit.getHoldingQuantity().multiply(rates.get(deposit.getCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString());
            }
        }

        return result;
    }

    @Override
    public BigDecimal getPosition(DepositPositionDetail deposit) {
        Map<String, BigDecimal> rates = fxService.getRates();
        return deposit.getHoldingQuantity().multiply(rates.get(deposit.getCurrency())).setScale(2, BigDecimal.ROUND_HALF_UP);
    }

    @Override
    public BigDecimal getPL(DepositPositionDetail deposit) {
        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, BigDecimal> xRates = fxService.getPreviousRates();
        return deposit.getHoldingQuantity().multiply(rates.get(deposit.getCurrency()).subtract(xRates.get(deposit.getCurrency()))).divide(new BigDecimal(2)).setScale(2, BigDecimal.ROUND_HALF_UP);
    }

    @Override
    public BigDecimal getYesterdayPL(DepositPositionDetail deposit) {
        Map<String, BigDecimal> rates = fxService.getRates();
        Map<String, BigDecimal> xRates = fxService.getPreviousRates();
        return deposit.getHoldingQuantity().multiply(rates.get(deposit.getCurrency()).subtract(xRates.get(deposit.getCurrency()))).setScale(2, BigDecimal.ROUND_HALF_UP);
    }
}
