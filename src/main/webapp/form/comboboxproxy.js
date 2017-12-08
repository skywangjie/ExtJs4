Ext.onReady(function(){
	//创建数据模型
	Ext.regModel('department', {
		   fields:[
			{name:'name',type:'auto'},
			{name:'id',type:'auto'}
		]
	});
	//定义组合框中显示的数据源
	var deptStore = Ext.create('Ext.data.Store',{
		model : 'department',
		proxy: {
		       type: 'ajax',//Ext.data.AjaxProxy
		       url:'city!queryCity.action'
		   }
	});
	//创建表单
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.ComboBox远程数据源示例',
		frame : true,
		height:100,
		width:250,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 70,//标签宽度
			width : 200,//字段宽度
			labelAlign : 'left'//标签对齐方式
		},
		items:[{
			xtype : 'combo',
			fieldLabel:'部门列表',
			listConfig : {
				loadingText : '正在加载部门信息',//加载数据时显示的提示信息
				emptyText : '未找到匹配值',//当值不在列表是的提示信息
				maxHeight : 150//设置下拉列表的最大高度为60像素
			},
			allQuery:'alldepartment',//查询全部信息的查询字符串
			minChars : 3,//下拉列表框自动选择前用户需要输入的最小字符数量
			queryDelay : 300,//查询延迟时间
			queryParam : 'searchdepartment',//查询的名字
			triggerAction: 'all',//单击触发按钮显示全部数据
			store : deptStore,//设置数据源
			displayField:'name',//定义要显示的字段
			valueField:'id',//定义值字段,
			typeAhead : true,//允许自动选择匹配的剩余部分文本
			queryMode: 'remote'//远程模式
		}]
	});
});