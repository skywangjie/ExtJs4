Ext.onReady(function(){
	new Ext.form.Panel({
		title:'Ext.form.field.Checkbox和Ext.form.field.Radio示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		frame : true,
		height:150,
		width:300,
		renderTo :Ext.getBody(),
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 80,//标签宽度
			width : 200,//字段宽度
			labelAlign : 'left'//标签对齐方式
		},
		items:[
		{
			xtype : 'radio',
			name : 'sex',//名字相同的单选框会作为一组
			fieldLabel:'性别',
			boxLabel : '男'
		},
		{
			xtype : 'radio',
			name : 'sex',//名字相同的单选框会作为一组
			fieldLabel:'性别',
			boxLabel : '女'
		},
		{
			xtype : 'checkboxfield',
			name : 'swim',
			fieldLabel:'爱好',
			boxLabel : '游泳'
		},
		{
			xtype : 'checkboxfield',
			name : 'walk',
			fieldLabel:'爱好',
			boxLabel : '散步'
		}]
	});
});