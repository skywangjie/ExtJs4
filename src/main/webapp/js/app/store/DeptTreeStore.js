Ext.define("AM.store.DeptTreeStore",{
	extend:'Ext.data.TreeStore',
	defaultRoodId:'root',
	model:'AM.model.DeptTreeModel',
	proxy:{
		type:'ajax',
		url:'dept!queryDeptTree.action',
		reader:"json"
	},
	autoLoad: true
})