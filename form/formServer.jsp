<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*" %>
<%

response.setContentType("text/html;charset=UTF-8");
response.setHeader("pragma","no-cache");
response.setHeader("cache-control","no-cache");

String msg = "{data:{ id : 0 , name : 'tom' ,family : {father:'mike',mother:'lucy'}, age : 24 },success:true}";  
response.getWriter().write(msg);  

%>