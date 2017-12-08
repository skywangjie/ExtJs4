Ext.onReady(function(){
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.Display示例',
		width : 200,
		frame : true,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		items:[{
			fieldLabel:'展示字段',
			xtype : 'displayfield',
			value : '<font color=red>ExtJS4登场</font>',
			labelWidth : 70,//标签宽度
			labelSeparator :'：'//分隔符
		}]
	});
});