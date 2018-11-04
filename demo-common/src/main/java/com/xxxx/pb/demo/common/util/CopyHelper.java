package com.xxxx.pb.demo.common.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;

import com.xxxx.pb.demo.common.exception.SystemException;

public class CopyHelper<T, E> {
    public static <S, T> T copy(S src, Class<T> tClass) throws SystemException {
        if (src != null) {
            try {
                T t = tClass.newInstance();
                BeanUtils.copyProperties(src, t);
                return t;
            } catch (InstantiationException | IllegalAccessException e) {
                throw new SystemException(e.getMessage(), e);
            }
        } else {
            return null;
        }
    }

    public static <S, T> T copy(Optional<S> src, Class<T> tClass) throws SystemException {
        if (src.isPresent()) {
            try {
                T t = tClass.newInstance();
                BeanUtils.copyProperties(src.get(), t);
                return t;
            } catch (InstantiationException | IllegalAccessException e) {
                throw new SystemException(e.getMessage(), e);
            }
        } else {
            return null;
        }
    }

    public static <S, T> List<T> copy(List<S> src, Class<T> tClass) throws SystemException {
        List<T> result = new ArrayList<T>();

        if (src != null && src.size() > 0) {
            try {
                for (S s : src) {
                    T t = tClass.newInstance();
                    BeanUtils.copyProperties(s, t);
                    result.add(t);
                }
            } catch (InstantiationException | IllegalAccessException e) {
                throw new SystemException(e.getMessage(), e);
            }
        }

        return result;
    }
}
