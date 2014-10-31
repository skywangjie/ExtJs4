Ext.onReady(function() {
	var store = Ext.create('Ext.data.Store', {
			autoLoad : {
				start : 0,
				limit : 4
			},
			fields : ['id', 'name', 'age'],
			pageSize : 4, // 设置分页大小
			proxy : {
				type : 'ajax',
				url : 'jsonServer.jsp', // 请求的服务器地址
				reader : {
					type : 'json',
					root : 'rows',
					totalProperty: 'total'
				}
			}
		});
	// 创建Grid表格组件
	Ext.create('Ext.grid.Panel', {
			title : 'Ext.toolbar.Paging示例',
			renderTo : Ext.getBody(),
			width : 400,
			height : 500,
			frame : true,
			forceFit : true,
			store : store,
			columns : [// 配置表格列
				{header : "id",width : 30,dataIndex : 'id',sortable : true}, 
				{header : "姓名",width : 80,dataIndex : 'name',sortable : true}, 
				{header : "年龄",width : 80,dataIndex : 'age',sortable : true}
			],
			tbar : [
				{xtype:'button',id:'exportUser',text:'导出',iconCls:'table_export'},
				{xtype:'button',id:'delUser',text:'删除',iconCls:'table_export'}
			],
			dockedItems: [{
        		xtype: 'pagingtoolbar',
        		dock: 'bottom',
        		store : store, // 这里需要指定与表格相同的store
        		displayInfo : true
    		}]
	});
});