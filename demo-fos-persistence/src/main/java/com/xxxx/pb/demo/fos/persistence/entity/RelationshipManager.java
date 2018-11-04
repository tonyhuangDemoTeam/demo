package com.xxxx.pb.demo.fos.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RELATIONSHIP_MANAGER")
public class RelationshipManager {
    @Id
    @Column(name = "RM_CODE", nullable = false, length = 6)
    private String rmCode;

    @Column(name = "RM_NAME", length = 60)
    private String rmName;

    @Column(name = "PHONE_NUMBER", length = 60)
    private String phoneNumber;

    @Column(name = "EMAIL_ADDRESS", length = 60)
    private String emailAddress;

    @Column(name = "HOME_COUNTRY", length = 3)
    private String homeCountry;

    public String getRmCode() {
        return rmCode;
    }

    public void setRmCode(String rmCode) {
        this.rmCode = rmCode;
    }

    public String getRmName() {
        return rmName;
    }

    public void setRmName(String rmName) {
        this.rmName = rmName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getHomeCountry() {
        return homeCountry;
    }

    public void setHomeCountry(String homeCountry) {
        this.homeCountry = homeCountry;
    }
}
