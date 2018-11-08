package com.xxxx.pb.demo.fos.service.view;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class ProfileView {
    
    private Map<String, List<PositionView>> positions;

    private Map<String, BigDecimal> prodCataInfo;
    
    private Map<String, BigDecimal> ccyCataInfo;

    public Map<String, List<PositionView>> getPositions() {
        return positions;
    }

    public void setPositions(Map<String, List<PositionView>> positions) {
        this.positions = positions;
    }

    public Map<String, BigDecimal> getProdCataInfo() {
        return prodCataInfo;
    }

    public void setProdCataInfo(Map<String, BigDecimal> prodCataInfo) {
        this.prodCataInfo = prodCataInfo;
    }

    public Map<String, BigDecimal> getCcyCataInfo() {
        return ccyCataInfo;
    }

    public void setCcyCataInfo(Map<String, BigDecimal> ccyCataInfo) {
        this.ccyCataInfo = ccyCataInfo;
    }
}
