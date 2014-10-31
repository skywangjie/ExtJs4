package com.somnus.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.somnus.model.City;

public class CityAction extends ActionSupport {
	private List<City> list;
	
	public List<City> getList() {
		return list;
	}

	public void setList(List<City> list) {
		this.list = list;
	}

	/**
	 * <p>
	 * 	返回List对象
	 * </p>
	 * @return
	 */
	public String queryCity(){
		list = new ArrayList<City>();
		City city1 = new City();
		city1.setId("001");
		city1.setName("北京");
		City city2 = new City();
		city2.setId("002");
		city2.setName("上海");
		City city3 = new City();
		city3.setId("003");
		city3.setName("天津");
		City city4 = new City();
		city4.setId("004");
		city4.setName("重庆");
		list.add(city1);
		list.add(city2);
		list.add(city3);
		list.add(city4);
		return "listcity";
	}
}
