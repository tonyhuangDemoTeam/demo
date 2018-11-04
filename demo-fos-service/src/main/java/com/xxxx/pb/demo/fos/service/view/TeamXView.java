package com.xxxx.pb.demo.fos.service.view;

import java.util.List;

import com.xxxx.pb.demo.fos.detail.RmTeamDetail;

public class TeamXView extends RmTeamDetail {
    private List<RmXView> rms;

    public List<RmXView> getRms() {
        return rms;
    }

    public void setRms(List<RmXView> rms) {
        this.rms = rms;
    }
}
