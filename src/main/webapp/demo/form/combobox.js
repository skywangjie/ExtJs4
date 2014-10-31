Ext.onReady(function(){
	//创建数据模型
	Ext.regModel('PostInfo', {
		fields: [
			{name: 'city',type:'auto'},
			{name: 'areaCode',	  type:'auto'},
			{name: 'style',	  type:'auto'}
		]
	});
	//定义组合框中显示的数据源
	var postStore = Ext.create('Ext.data.Store',{
		model : 'PostInfo',
//		pageSize:4,
		data : [
			{city:'南昌',areaCode:'0791',style:'1E90FF'},
			{city:'九江',areaCode:'0792',style:'9932CC'},
			{city:'上饶',areaCode:'0793',style:'FF00FF'},
			{city:'抚州',areaCode:'0794',style:'ADFF2F'},
			{city:'宜春',areaCode:'0795',style:'00FF7F'},
			{city:'上饶',areaCode:'0796',style:'4B0082'},
			{city:'赣州',areaCode:'0797',style:'FF00FF'},
			{city:'景德镇',areaCode:'0798',style:'9932CC'},
			{city:'萍乡',areaCode:'0799',style:'1E90FF'},
			{city:'新余',areaCode:'0790',style:'00FF7F'},
			{city:'鹰潭',areaCode:'0701',style:'4B0082'}
		]
	});
	//创建表单
	Ext.create('Ext.form.Panel',{
		title :'Ext.form.field.ComboBox本地数据源示例',
		renderTo : Ext.getBody(),
		bodyPadding: 5,
		frame : true,
		height :100,
		width :300,
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 70,//标签宽度
			width : 280,//字段宽度
//			pageSize:4,
			labelAlign : 'left'//标签对齐方式
		},
		items:[
		{
			xtype : 'combo',
			listConfig : {//控制下拉列表的样式
				emptyText : '未找到匹配值',//当值不在列表是的提示信息
				maxHeight : 200,//设置下拉列表的最大高度为150像素
				getInnerTpl :function(){
					return "<div class='{style}'>{city}[{areaCode}]</div>"
				}
			},
			name :'post',
			autoSelect : true,
			fieldLabel :'城市',
			triggerAction : 'all',//单击触发按钮显示全部数据
			store : postStore,//设置数据源
			displayField :'city',//定义要显示的字段
			valueField :'areaCode',//定义值字段
			queryMode : 'local',//本地模式
			forceSelection : true,//要求输入值必须在列表中存在
			typeAhead : true,//允许自动选择匹配的剩余部分文本
			value :'0791',//默认选择南昌
			multiSelect:true//允许多选
		}]
	});
});