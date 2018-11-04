package com.xxxx.pb.demo.fos.service.impl;

import java.util.List;
import java.util.Map;

import com.xxxx.pb.demo.fos.detail.TeamRmMapDetail;
import com.xxxx.pb.demo.fos.service.view.TeamXView;

public interface TeamService {
    public List<TeamXView> getAllTeamInfos();

    public Map<String, List<TeamRmMapDetail>> getAllRelationshipManagers();
}
