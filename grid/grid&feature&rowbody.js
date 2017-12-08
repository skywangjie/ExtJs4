Ext.onReady(function() {
	// 创建表格数据
	var datas = [
		['张三', 2500, '张三的个人简历...'], 
		['李四', 1500, '李四的个人简历...']
	];
	// 创建Grid表格组件
	Ext.create('Ext.grid.Panel', {
		title : 'Ext.grid.feature.RowBody示例',
		renderTo : Ext.getBody(),
		width : 500,
		height : 500,
		frame : true,
		store : {
			fields : ['name', 'salary', 'introduce'],
			proxy : {
				type : 'memory',
				data : datas,
				reader : 'array'// Ext.data.reader.Array解析器
			},
			autoLoad : true
		},
		features : [
		{
			ftype:'rowbody',
			getAdditionalData : function(data, idx, record,orig) 
			{
				var colspan = this.view.headerCt.getColumnCount();// 获取表格的列数
				return {
						rowBody : record.get('introduce'),// 指定行体内容
						rowBodyCls : 'rowbodyColor',// 指定行体样式
						rowBodyColspan : colspan// 指定行体跨列的列数
				};
			}
		}],
		/*features : [Ext.create('Ext.grid.feature.RowBody', 
		{
			getAdditionalData : function(data, idx, record,orig) 
			{
				var colspan = this.view.headerCt.getColumnCount();// 获取表格的列数
				return {
						rowBody : record.get('introduce'),// 指定行体内容
						rowBodyCls : 'rowbodyColor',// 指定行体样式
						rowBodyColspan : colspan// 指定行体跨列的列数
				};
			}
		})],*/
		columns : [// 配置表格列
				Ext.create('Ext.grid.RowNumberer', {text : '行号',width : 35}), 
				{header : "姓名",flex : 1,dataIndex : 'name'}, 
				{header : "薪资",flex : 1,dataIndex : 'salary'}
		]
	});
});