Ext.onReady(function() {
	// 注册用户数据模型User
	Ext.regModel('User', {
		fields : ['name', 'age','index']
	});
	// 创建表格数据
	var datas = [['张三', 20,1], ['李四', 25,2], ['王五', 30,3]];
	// 创建Grid表格组件
	var grid = Ext.create('Ext.grid.Panel', {
		title : 'Ext.grid.plugin.DragDrop示例',
		renderTo : 'grid1',
		width : 400,
		height : 400,
		frame : true,
		store : {
			model : 'User',
			proxy : {
				type : 'memory',
				data : datas,
				reader : 'array'// Ext.data.reader.Array解析器
			},
			autoLoad : true
		},
		tbar : [{
			text : '保存',
			handler : function(o){
					var st = o.ownerCt.ownerCt.getStore();
					st.each(function(record){
						alert(record.get('name'));
					});
					st.sync();//数据与后台同步
					var records = st.getUpdatedRecords();
					alert(records);
					Ext.Array.each(records,function(model){
						model.commit();
					})
			}
		}],
		selType : 'checkboxmodel',
		viewConfig : {
			plugins : [
				{
					ptype:'gridviewdragdrop',
					enableDrag:true,
					enabledrop:true,
					dragGroup : 'grid1',// 拖拽组名称
					dropGroup : 'grid1'// 拖放组名称
				}
			],
			/*plugins : [
				Ext.create('Ext.grid.plugin.DragDrop', {
							enableDrag:true,
							enabledrop:true,
							dragGroup : 'grid1',// 拖拽组名称
							dropGroup : 'grid1'// 拖放组名称
				})
			],*/
			listeners:{
				drop:function( node,  data,  overModel,  dropPosition,  options)
				{
					var st = this.getStore();
					for(i = 0;i<st.getCount();i++)
					{
						st.getAt(i).set('index',i+1);
					}
				}
			}
		},
		columns : [// 配置表格列
			Ext.create('Ext.grid.RowNumberer', {text : '行号',width : 35}), 
			{header : "姓名",width : 50,dataIndex : 'name'}, 
			{header : "年龄",width : 100,dataIndex : 'age'},
			{header : "index",width : 100,dataIndex : 'index'}
		]
	});

	// 创建Grid表格组件
	/*Ext.create('Ext.grid.Panel', {
		title : '表格二',
		renderTo : 'grid2',
		width : 400,
		height : 150,
		frame : true,
		store : {
			model : 'User',
			proxy : {
				type : 'memory',
				data : [],
				reader : 'array'// Ext.data.reader.Array解析器
			},
			autoLoad : true
		},
		viewConfig : {
			plugins : [
				// 行编辑模式
				Ext.create('Ext.grid.plugin.DragDrop', {
							dragGroup : 'grid2',// 拖拽组名称
							dropGroup : 'grid1'// 拖放组名称
				})
			],
			listeners:{
				drop:function( node,  data,  overModel,  dropPosition,  options)
				{
					var st = this.getStore();
					for(i = 0;i<st.getCount();i++)
					{
						st.getAt(i).set('index',i+1);
					}
				}
			}
		},
		columns : [// 配置表格列
			Ext.create('Ext.grid.RowNumberer', {text : '行号',width : 35}), 
			{header : "姓名",width : 50,dataIndex : 'name'}, 
			{header : "年龄",width : 100,dataIndex : 'age'},
			{header : "index",width : 100,dataIndex : 'index'}
		]
	});*/
});