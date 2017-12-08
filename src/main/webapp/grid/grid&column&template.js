Ext.onReady(function(){
	//创建表格数据
	var datas = [
		['张三',true,new Date(1979,09,13),2500],
		['李四',false,new Date(1978,10,01),1500],
		['王五',false,new Date(1981,01,01),1000]
	];
	//创建Grid表格组件
	Ext.create('Ext.grid.Panel',{
		title : 'Ext.grid.column.Template示例',
		renderTo: Ext.getBody(),
		width:450,
		height:150,
		frame:true,
		store: {
		       fields: ['name','leader','birthday','salary'],
		       proxy: {
		           type: 'memory',
		           data : datas,
		           reader : 'array'//Ext.data.reader.Array解析器
		       },
		       autoLoad: true
		},
		columns: [//配置表格列
			{header: "姓名", width: 50, dataIndex: 'name'},
			{header: "组长", width: 50, dataIndex: 'leader', 
				xtype: 'booleancolumn',//Ext.grid.column.Boolean布尔列
				trueText: '是',
				falseText: '否'
			},
			{header: "生日", width: 100, dataIndex: 'birthday', 
				xtype : 'datecolumn',//Ext.grid.column.Date日期列
				format : 'Y年m月d日'//日期格式化字符串
			},
			{header: "薪资", width: 50, dataIndex: 'salary', 
				xtype: 'numbercolumn',//Ext.grid.column.Number数字列
				format:'0,000'//数字格式化字符串
			},
			{header: "操作", width: 70, 
				xtype: 'actioncolumn',//Ext.grid.column.Action动作列
		           items: [{
		               icon: 'images/edit.gif',//指定编辑图标资源的URL 
		               handler: function(grid, rowIndex, colIndex) {
		                //获取被操作的数据记录
		                   var rec = grid.getStore().getAt(rowIndex);
		                   alert("编辑 " + rec.get('name'));
		               }
		           },{
		               icon: 'images/del.gif',//指定编辑图标资源的URL 
		               handler: function(grid, rowIndex, colIndex) {
		                   var rec = grid.getStore().getAt(rowIndex);
		                   alert("删除 " + rec.get('name'));
		               }                
		           },{
		               icon: 'images/save.gif',//指定编辑图标资源的URL 
		               handler: function(grid, rowIndex, colIndex) {
		                   var rec = grid.getStore().getAt(rowIndex);
		                   alert("保存 " + rec.get('name'));
		               }                
		           }]
			},
			{
				header: "描述", width: 100,
				xtype: 'templatecolumn',//Ext.grid.column.Template数字列
				tpl : '{name}<tpl if="leader == false">不</tpl>是组长'
			}
		]
	});
});