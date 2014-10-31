package com.somnus.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.opensymphony.xwork2.ActionSupport;
import com.somnus.model.Dept;

public class DeptAction extends ActionSupport {
	private Dept root;
	private List deptInfosList;
	private int total;
	private String success;
	public Dept getRoot() {
		return root;
	}
	public void setRoot(Dept root) {
		this.root = root;
	}
	/**
	 * <p>
	 * 	返回List对象
	 * </p>
	 * @return
	 */
	public String queryDeptTree(){
		Set<Dept> childrenset1= new HashSet<Dept>();
		Dept dept11 = new Dept();
		dept11.setId("11");
		dept11.setText("研发部");
		dept11.setChecked(false);
		dept11.setLevel(2);
		dept11.setLeaf(true);
		
		Dept dept12 = new Dept();
		dept12.setId("12");
		dept12.setText("实施部");
		dept12.setChecked(false);
		dept12.setLevel(2);
		dept12.setLeaf(true);
		
		childrenset1.add(dept11);
		childrenset1.add(dept12);
		
		Dept dept1 = new Dept();
		dept1.setId("1");
		dept1.setText("技术部门");
		dept1.setChecked(false);
		dept1.setLeaf(false);
		dept1.setLevel(1);
		dept1.setChildren(childrenset1);
		/////////////////////////////////////////////////
		Set<Dept> childrenset2= new HashSet<Dept>();
		Dept dept21 = new Dept();
		dept21.setId("21");
		dept21.setText("人事部");
		dept21.setChecked(false);
		dept21.setLevel(2);
		dept21.setLeaf(true);
		
		Dept dept22 = new Dept();
		dept22.setId("22");
		dept22.setText("行政部");
		dept22.setChecked(false);
		dept22.setLevel(2);
		dept22.setLeaf(true);
		
		childrenset2.add(dept21);
		childrenset2.add(dept22);
		
		Dept dept2 = new Dept();
		dept2.setId("2");
		dept2.setText("后勤部门");
		dept2.setChecked(false);
		dept2.setLeaf(false);
		dept2.setLevel(1);
		dept2.setChildren(childrenset2);
		///////////////////////////
		Set<Dept> childrenset= new HashSet<Dept>();
		childrenset.add(dept1);
		childrenset.add(dept2);
		
		root = new Dept();
		root.setId("0");
		root.setText("根节点");
		root.setChecked(false);
		root.setLeaf(false);
		root.setChildren(childrenset);
		System.out.println(root);
		return "dept";
	}
	/**
	 * <p>
	 * 	返回List对象
	 * </p>
	 * @return
	 */
	public String queryDeptList(){
		deptInfosList = new ArrayList<Dept>();
		
		Dept dept2 = new Dept();
		dept2.setId("2");
		dept2.setText("后勤部门");
		dept2.setChecked(false);
		dept2.setLeaf(false);
		dept2.setLevel(1);
		
		Dept dept1 = new Dept();
		dept1.setId("1");
		dept1.setText("技术部门");
		dept1.setChecked(false);
		dept1.setLeaf(false);
		dept1.setLevel(1);
		
		Dept dept11 = new Dept();
		dept11.setId("11");
		dept11.setText("研发部");
		dept11.setChecked(false);
		dept11.setLeaf(true);
		dept11.setLevel(2);
		
		Dept dept12 = new Dept();
		dept12.setId("12");
		dept12.setText("实施部");
		dept12.setChecked(false);
		dept12.setLeaf(true);
		dept12.setLevel(2);
		
		Dept dept21 = new Dept();
		dept21.setId("21");
		dept21.setText("人事部");
		dept21.setChecked(false);
		dept21.setLeaf(true);
		dept21.setLevel(2);
		
		Dept dept22 = new Dept();
		dept22.setId("22");
		dept22.setText("行政部");
		dept22.setChecked(false);
		dept22.setLeaf(true);
		dept22.setLevel(2);
		
		deptInfosList.add(dept1);
		deptInfosList.add(dept2);
		deptInfosList.add(dept11);
		deptInfosList.add(dept12);
		deptInfosList.add(dept21);
		deptInfosList.add(dept22);
		
		total = 4;
		return "deptlist";
	}
	public String saveDept()
	{
		success = "successfully";
		
		return SUCCESS;
	}
	public List getDeptInfosList() {
		return deptInfosList;
	}
	public void setDeptInfosList(List deptInfosList) {
		this.deptInfosList = deptInfosList;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public String getSuccess() {
		return success;
	}
	public void setSuccess(String success) {
		this.success = success;
	}
	
}
