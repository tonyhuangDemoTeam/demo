package com.xxxx.pb.demo.fos.service.view;

import java.math.BigDecimal;

public class PositionView {
    private String name;
    
    private BigDecimal quantity;
    
    private BigDecimal amount;
    
    private BigDecimal marketPrice;
    
    private BigDecimal cost;
    
    private BigDecimal averagePL;
    
    private BigDecimal yesterdayPL;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getQuantity() {
        return formatDecimal(quantity);
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public String getAmount() {
        return formatDecimal(amount);
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getMarketPrice() {
        return formatDecimal(marketPrice);
    }

    public void setMarketPrice(BigDecimal marketPrice) {
        this.marketPrice = marketPrice;
    }

    public String getCost() {
        return formatDecimal(cost);
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public String getAveragePL() {
        return formatDecimal(averagePL);
    }

    public void setAveragePL(BigDecimal averagePL) {
        this.averagePL = averagePL;
    }

    public String getYesterdayPL() {
        return formatDecimal(yesterdayPL);
    }

    public void setYesterdayPL(BigDecimal yesterdayPL) {
        this.yesterdayPL = yesterdayPL;
    }
    
    private String formatDecimal(BigDecimal d) {
        return d.setScale(2, BigDecimal.ROUND_HALF_UP).toPlainString();
    }
}
