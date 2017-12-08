Ext.onReady(function() {
	// 定义用户User模型
	Ext.regModel("OrgInfo", {
		fields : ['orgId', 'name', 'count']
	});
	var myStore = new Ext.data.TreeStore({
		model : 'OrgInfo',
		nodeParam : 'orgId',// 指定节点参数名
		proxy : {
			type : 'ajax',
			url : 'treeServer.jsp',
			reader : 'json'
		},
		autoLoad : true,
		root : {
				name : '根节点',
				id : '-1'
		}
	});

	Ext.create('Ext.tree.Panel', {
		title : '分级异步加载树节点示例',
		renderTo : Ext.getBody(),
		width : 250,
		height : 150,
		columns : [
		{
				xtype : 'treecolumn',// 树状表格列
				text : '公司名称',
				dataIndex : 'name',
				width : 150,
				sortable : true
		}, 
		{
				text : '员工人数',
				dataIndex : 'count',
				flex : 1,
				sortable : true
		}],
		store : myStore,
		rootVisible : false
	});
});