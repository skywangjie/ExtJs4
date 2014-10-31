Ext.onReady(function() {
	var tree = Ext.create('Ext.tree.Panel', {
			title : 'TreeGrid（多列树示例）',
			renderTo : Ext.getBody(),
			width : 200,
			height : 120,
			fields : ['name', 'description'],
			columns : [
			{
				xtype : 'treecolumn',// 树状表格列
				text : '名称',
				dataIndex : 'name',
				width : 100,
				sortable : true
			}, 
			{
				text : '描述',
				dataIndex : 'description',
				flex : 1,
				sortable : true
			}],
			root : {
				name : '树根',
				description : '树根的描述',
				expanded : true,
				children : [
				{
					name : '节点一',
					description : '节点一的描述',
					leaf : true
				}, 
				{
					name : '节点二',
					description : '节点二的描述',
					leaf : true
				}]
			}
	});
});