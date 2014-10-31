Ext.onReady(function() {
	// 创建表格数据
	var datas = [
		['张三', '男', 29], 
		['李四', '女', 30], 
		['王五', '男', 27],
		['赵六', '女', 31]
	];
	// 创建Grid表格组件
	Ext.create('Ext.grid.Panel', {
			title : 'Ext.grid.feature.GroupingSummary示例',
			renderTo : Ext.getBody(),
			width : 500,
			height : 500,
			frame : true,
			store : {
				fields : ['name', 'sex', 'age'],
				groupField : 'sex',// 设置分组字段
				proxy : {
					type : 'memory',
					data : datas,
					reader : 'array'// Ext.data.reader.Array解析器
				},
				autoLoad : true
			},
			features : [
			{
				ftype:'groupingsummary',
				groupByText : '用本字段分组',
				showGroupsText : '显示分组',
				groupHeaderTpl : '性别: {name} ({rows.length})', // 分组标题模版
				startCollapsed : false// 设置初始分组是否收起
			}],
			/*features : [Ext.create('Ext.grid.feature.GroupingSummary', 
			{
				groupByText : '用本字段分组',
				showGroupsText : '显示分组',
				groupHeaderTpl : '性别: {name} ({rows.length})', // 分组标题模版
				startCollapsed : true// 设置初始分组是否收起
			})],*/
			columns : [// 配置表格列
				{header : "姓名",width : 100,dataIndex : 'name',
						summaryType : 'count',// 求数量
						summaryRenderer : function(value) 
						{
							return '员工总数：' + value
						}
				}, 
				{header : "性别",width : 50,dataIndex : 'sex'}, 
				{header : "年龄",width : 110,dataIndex : 'age',
						summaryType : 'average',// 求数量
						summaryRenderer : function(value) 
						{
							return '平均年龄：' + value
						}
				}]
		});
});