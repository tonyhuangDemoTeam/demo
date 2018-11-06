package com.xxxx.pb.demo.fos.service.view;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

public class ArchView {
    private String name;
    
    private BigDecimal position;
    
    private int clients;
    
    private List<ArchView> entries;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position.setScale(2, RoundingMode.HALF_UP).toPlainString();
    }

    public void setPosition(BigDecimal position) {
        this.position = position;
    }

    public int getClients() {
        return clients;
    }

    public void setClients(int clients) {
        this.clients = clients;
    }

    public List<ArchView> getEntries() {
        return entries;
    }

    public void setEntries(List<ArchView> entries) {
        this.entries = entries;
    }
}
