Ext.onReady(function() {
	// 创建表格数据
	var datas = [['张三', 2500], ['李四', 1500]];
	// 创建Grid表格组件
	Ext.create('Ext.grid.Panel', {
			title : 'Ext.grid.feature.Summary示例',
			renderTo : Ext.getBody(),
			width : 500,
			height :500,
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
			features : [{
					ftype : 'summary'// Ext.grid.feature.Summary表格汇总特性
			}],
			/*features : [Ext.create('Ext.grid.feature.Summary', {})],*/
			columns : [// 配置表格列
				{
					header : "姓名",flex : 1,dataIndex : 'name',summaryType : 'count',// 求数量
						summaryRenderer : function(value) 
						{
								return '员工总数：' + value
						}
				}, 
				{
					header : "薪资",flex : 1,dataIndex : 'salary',summaryType : 'average',// 求平均值
						summaryRenderer : function(value) 
						{
								return '平均薪资：' + value
						}
				}
			]
		});
});