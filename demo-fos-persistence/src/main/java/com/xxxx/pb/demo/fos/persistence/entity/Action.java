package com.xxxx.pb.demo.fos.persistence.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ACTION")
public class Action {
    @Id
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "TYPE", length = 1)
    private String type;

    @Column(name = "RM_CODE", length = 6)
    private String rmCode;

    @Column(name = "REMARKS", length = 256)
    private String remarks;

    @Column(name = "CREATE_DATE")
    private Date createDate;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRmCode() {
        return rmCode;
    }

    public void setRmCode(String rmCode) {
        this.rmCode = rmCode;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
