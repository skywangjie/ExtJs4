Ext.onReady(function() {
	// 初始化提示信息
	Ext.QuickTips.init();
	// 创建表格数据
	var datas = [
		['张三', new Date(1979, 09, 13), 2500],
		['李四', new Date(1978, 10, 01), 1500],
		['王五', new Date(1981, 01, 01), 1000]
	];
	// 创建Grid表格组件
	Ext.create('Ext.grid.Panel', {
			title : 'Ext.grid.plugin.CellEditing示例',
			renderTo : Ext.getBody(),
			width : 300,
			height : 150,
			frame : true,
			store : {
				fields : ['name', 'birthday', 'salary'],
				proxy : {
					type : 'memory',
					data : datas,
					reader : 'array'// Ext.data.reader.Array解析器
				},
				autoLoad : true
			},
			plugins : [
				{
					ptype:'cellediting',
					clicksToEdit : 2
				}
			],
			/*plugins : [
				Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit : 2})
			],*/
			selType : 'cellmodel',// 设置为单元格选择模式
			columns : [// 配置表格列
					Ext.create('Ext.grid.RowNumberer', {text : '行号',width : 35}), 
					{header : "姓名",width : 50,dataIndex : 'name',
							editor : {// 文本字段
								xtype : 'textfield',
								allowBlank : false
							}
					}, 
					{header : "生日",width : 100,dataIndex : 'birthday',xtype : 'datecolumn',// Ext.grid.column.Date日期列
							format : 'Y年m月d日',// 日期格式化字符串
							editor : {// 日期字段
								xtype : 'datefield',
								allowBlank : false
							}
					}, 
					{header : "薪资",width : 50,dataIndex : 'salary',xtype : 'numbercolumn',// Ext.grid.column.Number数字列
							format : '0,000',// 数字格式化字符串
							editor : {// 数字字段
								xtype : 'numberfield',
								allowBlank : false
							}
					}
				],
				listeners:{
					itemclick:function(view,record,item,index,e,options)
					{
						var sm = view.getSelectionModel();
						alert(Ext.JSON.encode(sm.getCurrentPosition()));
					}
				}
		});
});
