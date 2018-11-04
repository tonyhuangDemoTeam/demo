package com.xxxx.pb.demo.common.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.xxxx.pb.demo.common.util.Constant;

@Aspect
@Component
public class LogAspect {
    private final static Logger logger = LoggerFactory.getLogger(LogAspect.class);

    @Pointcut("execution(public * com.xxxx.pb.demo.*.*.*.*.*(..))")
    public void log() {
    }

    @Before("log()")
    public void doBefore(JoinPoint joinPoint) {
        StringBuilder b = new StringBuilder(joinPoint.getTarget().getClass().getName());
        b.append(" - ");
        b.append("{");

        int i = 0;
        for (Object obj : joinPoint.getArgs()) {
            if (obj != null) {
                b.append(obj.toString());
            } else {
                b.append(Constant.NULL);
            }

            i++;
            if (i < joinPoint.getArgs().length) {
                b.append(", ");
            }
        }

        b.append("}");

        logger.info(b.toString());
    }
}
