Ext.onReady(function() {
	// 创建表格数据
	var datas = [
			[100, '张三', 24], 
			[200, '李四', 30], 
			[300, '王五', 29]
	];
	// 创建Grid表格组件
	Ext.create('Ext.grid.Panel', {
			title : '简单Grid表格示例',
			renderTo : Ext.getBody(),
			width : 500,
			height : 500,
			frame : true,
			forceFit : true,
			store : {// 配置数据源
				fields : [{
						name:'id',type:'int'
					},{
						name:'name',type:'string'
					},{
						name:'age',type:'int'
				}],// 定义字段
				proxy : {
					type : 'memory',// Ext.data.proxy.Memory内存代理
					data : datas,// 读取内嵌数据
					reader : {
						type:'array'// Ext.data.reader.Array解析器
					}
				},
				autoLoad : true// 自动加载
			},
			columns : [// 配置表格列
				{header : "id",width : 50,dataIndex : 'id',sortable : true}, 
				{header : "姓名",width : 100,dataIndex : 'name',sortable : true}, 
				{header : "年龄",width : 100,dataIndex : 'age',sortable : true}
			]
		});
});