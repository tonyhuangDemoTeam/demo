package com.xxxx.pb.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class DemoFosPersistenceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoFosPersistenceApplication.class, args);
	}
}
