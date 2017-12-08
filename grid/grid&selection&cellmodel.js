Ext.onReady(function() {
	// 创建表格数据
	var datas = [
		[100, '张三', 24], 
		[200, '李四', 30], 
		[300, '王五', 29]
	];
	// 创建Grid表格组件
	var grid = Ext.create('Ext.grid.Panel', {
			title : 'Ext.selection.CellModel示例',
			renderTo : Ext.getBody(),
			width : 500,
			height : 500,
			frame : true,
			selType : 'cellmodel',// 设置为单元格选择模式Ext.selection.CellModel
			/*selModel: {
				selType : 'cellmodel'
			},*/
			tbar : [{
				text : '取得所选单元格',
				handler : function() {
					var cell = grid.getSelectionModel().getCurrentPosition();
						alert(Ext.JSON.encode(cell));
				}
			}],
			store : {// 配置数据源
				fields : ['id', 'name', 'age'],// 定义字段
				proxy : {
				type : 'memory',// Ext.data.proxy.Memory内存代理
				data : datas,// 读取内嵌数据
				reader : 'array'// Ext.data.reader.Array解析器
				},
				autoLoad : true
				// 自动加载
			},
			columns : [// 配置表格列
				Ext.create('Ext.grid.RowNumberer',{text : '行号', width : 35}),
				{header : "id",width : 30,dataIndex : 'id',sortable : true}, 
				{header : "姓名",width : 80,dataIndex : 'name',sortable : true}, 
				{header : "年龄",width : 80,dataIndex : 'age',sortable : true}
			]
	});
});