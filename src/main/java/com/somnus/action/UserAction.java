package com.somnus.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.opensymphony.xwork2.ActionSupport;
import com.somnus.model.User;

public class UserAction extends ActionSupport {
	private List userInfosList;
	private int total;
	private String ids;
	private int start;
	private int limit;
	private String keyText;
	
	public String getIds() {
		return ids;
	}

	public void setIds(String ids) {
		this.ids = ids;
	}

	public List getUserInfosList() {
		return userInfosList;
	}

	public void setUserInfosList(List userInfosList) {
		this.userInfosList = userInfosList;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public String getKeyText() {
		return keyText;
	}

	public void setKeyText(String keyText) {
		this.keyText = keyText;
	}

	/**
	 * <p>
	 * 	返回List对象
	 * </p>
	 * @return
	 */
	public String query(){
		userInfosList = new ArrayList<User>();
		User u1 = new User();
		u1.setAge(10000);
		u1.setName("张三");
		u1.setEmail("lucy@163.com");
		u1.setSex("男");
		u1.setBirthday(new Date());
		User u2 = new User();
		u2.setAge(10001);
		u2.setName("李四");
		u2.setEmail("jack@yahoo.com");
		u2.setSex("女");
		u2.setBirthday(new Date());
		User u3 = new User();
		u3.setAge(10002);
		u3.setName("王五");
		u3.setEmail("tom@qq.com");
		u3.setSex("男");
		u3.setBirthday(new Date());
		User u4 = new User();
		u4.setAge(10003);
		u4.setName("赵六");
		u4.setEmail("jack@yahoo.com");
		u4.setSex("女");
		u4.setBirthday(new Date());
		userInfosList.add(u1);
		userInfosList.add(u2);
		userInfosList.add(u3);
		userInfosList.add(u4);
		total = 4;
		System.out.println(keyText+"|"+start+"|"+limit);
		return "list";
	}
	public String delete(){
		System.out.println(ids);
		return "delete";
	}
}
