package com.somnus.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.somnus.util.DateUtil;

@SuppressWarnings("serial")
public class UploadAction extends ActionSupport
{
	/*
	 * 成员变量的名称不能随意更改, 
	 * private File file; 						变量的名称必须和jsp中上传文件标签中的name属性的值一致.
	 * private String fileFileName;		变量的名称必须为"上传文件的名称+FileName".
	 * private String fileContentType;	变量的名称必须为"上传文件的名称+ContentType", 
	 */
	private File file;

	private String fileFileName;

	private String fileContentType;

	public File getFile()
	{
		return file;
	}

	public void setFile(File file)
	{
		this.file = file;
	}

	public String getFileFileName()
	{
		return fileFileName;
	}

	public void setFileFileName(String fileFileName)
	{
		this.fileFileName = fileFileName;
	}

	public String getFileContentType()
	{
		return fileContentType;
	}

	public void setFileContentType(String fileContentType)
	{
		this.fileContentType = fileContentType;
	}

	@SuppressWarnings("deprecation")
	@Override
	public String execute() throws Exception
	{
		String root = ServletActionContext.getRequest().getRealPath("/upload");
		
		int idx = fileFileName.lastIndexOf(".");  
		//文件后缀  
		String extention= fileFileName.substring(idx);  
		String time = DateUtil.getCurrDate("yyyyMMddHHmmssSSS");
		//新的文件名(日期+后缀)  
		String newImgPath = time + extention; 
		
		File destFile = new File(root, newImgPath);
		
		FileUtils.copyFile(file, destFile);   
		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");
		response.setHeader("pragma","no-cache");
		response.setHeader("cache-control","no-cache");

		String msg = "{success:true,file:'"+newImgPath+"'}";  
		response.getWriter().write(msg);  

		return null;
	}

}
