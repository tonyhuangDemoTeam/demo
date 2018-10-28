package com.xxxx.pb.demo.sa.service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.xxxx.pb.demo.common.exception.ValidationException;
import com.xxxx.pb.demo.sa.detail.UserDetail;
import com.xxxx.pb.demo.sa.detail.UserEntitlementDetail;
import com.xxxx.pb.demo.sa.detail.UserRoleDetail;

@FeignClient("sa-persistence")
public interface UserPersistenceClient {
	@RequestMapping("/user/get?type=user")
	public UserDetail getUser(@RequestParam("id") String id);
	
	@RequestMapping("/user/get?type=role")
	public List<UserRoleDetail> getRole(@RequestParam("id")String id);
	
	@RequestMapping("/user/get?type=entitlement")
	public List<UserEntitlementDetail> getEntitlement(@RequestParam("id")String id);
	
	@RequestMapping("/user/save")
	public boolean saveUser(UserDetail d) throws ValidationException;
}
