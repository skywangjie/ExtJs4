Ext.onReady(function(){
	//创建表格数据
	var datas = [
		['张三',true,new Date(1979,09,13),2500,false],
		['李四',false,new Date(1978,10,01),1500,false],
		['王五',true,new Date(1979,09,13),2500,false],
		['赵六',false,new Date(1981,01,01),1000,false]
	];
	//创建Grid表格组件
	Ext.create('Ext.grid.Panel',{
		title : 'Ext.grid.column.Column示例',
		renderTo: Ext.getBody(),
		width:500,
		height:200,
		frame:true,
		store: {
		       fields: ['name','leader','birthday','salary','active'],
		       proxy: {
		           type: 'memory',
		           data : datas,
		           reader : 'array'//Ext.data.reader.Array解析器
		       },
		       autoLoad: true
		},
		columns: [//配置表格列
			{header: "姓名", width: 50, dataIndex: 'name'},/*xtype: gridcolumn*/
			{header: "组长", width: 50, dataIndex: 'leader', 
				xtype: 'booleancolumn',//Ext.grid.column.Boolean布尔列
				trueText: '是',
				falseText: '否'
			},
			{header: "生日", width: 100, dataIndex: 'birthday', 
				xtype : 'datecolumn',//Ext.grid.column.Date日期列
				format : 'Y年m月d日'//日期格式化字符串
			},
			{header: "薪资", width: 100, dataIndex: 'salary', 
				xtype: 'numbercolumn',//Ext.grid.column.Number数字列
				format:'0,000'//数字格式化字符串
			},
			{header : 'Active', width: 50, dataIndex : 'active',
				xtype : 'checkcolumn',
				listeners:{
					checkchange:function(checkcolumn, rowIndex, checked, eOpts ){
						var store = checkcolumn.ownerCt.ownerCt.getStore();
						
						var active = store.getAt(rowIndex); 
						var checkleader = active.get("leader");
						
						for(var i= 0 ;i< store.data.length;i++){
							var record = store.getAt(i);  
					        var leader = record.get("leader");
					        if(checkleader == leader){
					        	record.set("active",checked);
					        }
						}
					}
				}
			}
		],
	});
});