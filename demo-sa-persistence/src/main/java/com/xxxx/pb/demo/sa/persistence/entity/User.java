package com.xxxx.pb.demo.sa.persistence.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USERS")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "ID", nullable = false, length = 32)
    private String id;

    @Column(name = "NAME", nullable = false, length = 32)
    private String name;

    @Column(name = "PWD", nullable = false, length = 32)
    private String password;

    @Column(name = "FAIL_COUNTER", nullable = false)
    private Integer failCounter;

    @Column(name = "STATUS", nullable = false, length = 1)
    private String status;

    @Column(name = "REMARK", length = 256)
    private String remark;

    @Column(name = "CREATE_TIME")
    private Date createTime;

    @Column(name = "CREATE_BY", length = 32)
    private String createBy;

    @Column(name = "UPDATE_TIME")
    private Date updateTime;

    @Column(name = "UPDATE_BY", length = 32)
    private String updateBy;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getFailCounter() {
        return failCounter;
    }

    public void setFailCounter(Integer failCounter) {
        this.failCounter = failCounter;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }
}
