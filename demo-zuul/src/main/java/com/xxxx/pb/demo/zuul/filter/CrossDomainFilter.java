package com.xxxx.pb.demo.zuul.filter;

import javax.servlet.http.HttpServletResponse;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

public class CrossDomainFilter  extends ZuulFilter {
    private static String TYPE_PRE = "pre";
    
    private static String METHOD_GET = "GET";

    private static String HEADER_METHODS = "Access-Control-Allow-Methods";
    private static String HEADER_AGE = "Access-Control-Max-Age";
    private static String HEADER_ALLOW = "Access-Control-Allow-Headers";
    private static String HEADER_CACHE = "Cache-Control";
    private static String HEADER_PRAGMA = "Pragma";
    private static String HEADER_ORIGIN = "Access-Control-Allow-Origin";
    
    private static String HEADER_METHODS_VALUE = "*";
    private static String HEADER_AGE_VALUE = "3600";
    private static String HEADER_ALLOW_VALUE = "Origin, X-Requested-With, Content-Type, Accept, client_id, uuid, Authorization";
    private static String HEADER_CACHE_VALUE = "no-cache, no-store, must-revalidate";
    private static String HEADER_PRAGMA_VALUE = "no-cache";
    private static String HEADER_ORIGIN_VALUE = "*";

    @Override
    public Object run() throws ZuulException {
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletResponse resp = ctx.getResponse();

        resp.setHeader(HEADER_METHODS, HEADER_METHODS_VALUE);   
        resp.setHeader(HEADER_AGE, HEADER_AGE_VALUE); 
        resp.setHeader(HEADER_ALLOW, HEADER_ALLOW_VALUE);   
        resp.setHeader(HEADER_CACHE, HEADER_CACHE_VALUE); 
        resp.setHeader(HEADER_PRAGMA, HEADER_PRAGMA_VALUE); 
        
        if(ctx.getRequest().getMethod().equals(METHOD_GET)) {
            resp.setHeader(HEADER_ORIGIN, HEADER_ORIGIN_VALUE); 
        }
    
        return null;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public String filterType() {
        return TYPE_PRE;
    }
}
