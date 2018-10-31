package com.xxxx.pb.demo.fos.service.view;

public class CustomerView {
    private Integer customerNumber;
    
    private String customerName;
    
    private String type;
    
    private Integer age;
    
    private String region;
    
    private String bookingEntity;

    public Integer getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(Integer customerNumber) {
        this.customerNumber = customerNumber;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getBookingEntity() {
        return bookingEntity;
    }

    public void setBookingEntity(String bookingEntity) {
        this.bookingEntity = bookingEntity;
    }
}
