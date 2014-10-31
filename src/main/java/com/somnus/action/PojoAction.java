package com.somnus.action;

import java.util.ArrayList;
import java.util.List;
import com.opensymphony.xwork2.ActionSupport;
import com.somnus.model.POJO;

public class PojoAction extends ActionSupport {
	private String modelName;
	private List<POJO> list;
	
	public List<POJO> getList() {
		return list;
	}

	public void setList(List<POJO> list) {
		this.list = list;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	/**
	 * <p>
	 * 	返回List对象
	 * </p>
	 * @return
	 */
	public String query(){
		System.out.println("*************"+modelName);
		list = new ArrayList<POJO>();
		POJO pojo1 = new POJO();
		pojo1.setName("text");
		pojo1.setType("string");
		
		POJO pojo2 = new POJO();
		pojo2.setName("id");
		pojo1.setType("string");
		
		POJO pojo3 = new POJO();
		pojo3.setName("info");
		pojo1.setType("string");
		
		POJO pojo4 = new POJO();
		pojo4.setName("orderIndex");
		pojo4.setType("int");
		
		POJO pojo5 = new POJO();
		pojo5.setName("manager");
		pojo5.setType("string");
		
		POJO pojo6 = new POJO();
		pojo6.setName("nodeType");
		pojo6.setType("string");
		
		POJO pojo7 = new POJO();
		pojo7.setName("leaf");
		pojo7.setType("string");
		
		POJO pojo8 = new POJO();
		pojo8.setName("level");
		pojo8.setType("int");
		
		list.add(pojo1);
		list.add(pojo2);
		list.add(pojo3);
		list.add(pojo4);
		list.add(pojo5);
		list.add(pojo6);
		list.add(pojo7);
		list.add(pojo8);
		
		return SUCCESS;
	}
}
