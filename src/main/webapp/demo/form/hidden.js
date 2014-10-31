Ext.onReady(function(){
	Ext.QuickTips.init();
	var form = Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.Hidden示例',
		frame : true,
		height:200,
		width:300,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		defaultType: 'textfield',//设置表单字段的默认类型
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 70,//标签宽度
			width : 200,//字段宽度
			abelAlign : 'left'//标签对齐方式
		},
		items:[{
			name:'userName',
			fieldLabel:'姓名'
		},{//隐藏域
			name:'age',
			xtype : 'hidden',
			value:1
		},{
			name:'sex',
			fieldLabel:'性别'
		}]
	});
});