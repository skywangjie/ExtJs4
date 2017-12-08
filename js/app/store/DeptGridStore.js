Ext.define("AM.store.DeptGridStore",{
	extend:"Ext.data.Store",
	storeId:'s_dept',
	model:'AM.model.DeptGridModel',
//	model:Ext.create("AM.util.ModelFactory",{}).getModelByName("AM.model.DeptGridModel"),
	proxy:{
		api:{
			update:'dept!saveDept.action',
			remove:'user!delete.action'
		},
		type: 'ajax',
		url: 'dept!queryDeptList.action',
		reader:{
			type: "json",
			root: "deptInfosList"
		},
		writer:{
			type: "json"
		}
	},
	autoLoad: true
});