package com.xxxx.pb.demo.fos.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RM_TEAM")
public class RmTeam {
	@Id
    @Column(name = "TEAM_CODE", nullable = false, length = 6)
	private String teamCode;
	
	@Column(name = "TEAM_NAME", length = 60)
	private String teamName;
	
	@Column(name = "BOOKING_ENTITY", length = 3)
	private String bookingEntity;

	public String getTeamCode() {
		return teamCode;
	}

	public void setTeamCode(String teamCode) {
		this.teamCode = teamCode;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getBookingEntity() {
		return bookingEntity;
	}

	public void setBookingEntity(String bookingEntity) {
		this.bookingEntity = bookingEntity;
	}
}
