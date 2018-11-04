package com.xxxx.pb.demo.fos.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ISSUER")
public class Issuer {
    @Id
    @Column(name = "ISSUER_CODE", nullable = false, length = 20)
    private String issuerCode;

    @Column(name = "ISSUER_NAME", length = 200)
    private String issuerName;

    @Column(name = "DOMICILE_COUNTRY", length = 3)
    private String domicileCountry;

    @Column(name = "INDUSTRY_SECTOR", length = 3)
    private String industrySector;

    public String getIssuerCode() {
        return issuerCode;
    }

    public void setIssuerCode(String issuerCode) {
        this.issuerCode = issuerCode;
    }

    public String getIssuerName() {
        return issuerName;
    }

    public void setIssuerName(String issuerName) {
        this.issuerName = issuerName;
    }

    public String getDomicileCountry() {
        return domicileCountry;
    }

    public void setDomicileCountry(String domicileCountry) {
        this.domicileCountry = domicileCountry;
    }

    public String getIndustrySector() {
        return industrySector;
    }

    public void setIndustrySector(String industrySector) {
        this.industrySector = industrySector;
    }
}
