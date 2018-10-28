package com.xxxx.pb.demo.common.exception;

public class SystemException extends Exception {
	private static final long serialVersionUID = 1L;

	public SystemException()
    {
        super();
    }

    public SystemException(String msg)
    {
        super(msg);
    }

    public SystemException(String msg, Exception e)
    {
        super(msg, e);
    }
}
