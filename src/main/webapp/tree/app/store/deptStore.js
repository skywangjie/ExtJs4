Ext.define("AM.store.deptStore",{
	extend:'Ext.data.TreeStore',
	defaultRoodId:'root',
	proxy:{
		type:'ajax',
		url:'dept!queryDeptTree.action',
		reader:"json",
		autoLoad: true
	}
})