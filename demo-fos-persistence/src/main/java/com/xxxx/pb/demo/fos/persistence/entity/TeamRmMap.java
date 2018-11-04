package com.xxxx.pb.demo.fos.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TEAM_RM_MAP")
public class TeamRmMap {
    @Id
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "TEAM_CODE", nullable = false, length = 6)
    private String teamCode;

    @Column(name = "RM_CODE", nullable = false, length = 6)
    private String rmCode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTeamCode() {
        return teamCode;
    }

    public void setTeamCode(String teamCode) {
        this.teamCode = teamCode;
    }

    public String getRmCode() {
        return rmCode;
    }

    public void setRmCode(String rmCode) {
        this.rmCode = rmCode;
    }
}
