package com.xxxx.pb.demo.common.exception;

public class FunctionException extends Exception {
    private static final long serialVersionUID = 1L;

    private int code;

    public FunctionException() {
        super();
    }

    public FunctionException(int code, String msg) {
        super(msg);
        this.code = code;
    }

    public FunctionException(int code, String msg, Exception e) {
        super(msg, e);
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
