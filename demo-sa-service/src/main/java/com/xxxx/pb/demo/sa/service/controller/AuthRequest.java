package com.xxxx.pb.demo.sa.service.controller;

public class AuthRequest {
    private String id;

    private String password;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        StringBuilder result = new StringBuilder("{id:").append(id).append(", password:******");
        return result.toString();
    }
}
