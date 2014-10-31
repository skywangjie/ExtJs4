Ext.onReady(function(){
	Ext.QuickTips.init();//初始化提示;
	// custom Vtype for vtype:'IPAddress'
	Ext.apply(Ext.form.field.VTypes, {
   	 	IPAddress :function(v) 
   	 	{
        	return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v);
    	},
    	IPAddressText: 'Must be a numeric IP address',
    	IPAddressMask: /[\d\.]/i
	});
	Ext.create('Ext.form.Panel',{
		title:'vtype示例',
		width : 300,
		frame : true,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		defaultType: 'textfield',//设置表单字段的默认类型
		fieldDefaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 80,//标签宽度
			width : 270,//字段宽度
			msgTarget : 'side'
		},
		items:[
		{
			fieldLabel:'电子邮件',
			vtype:'email'
		},
		{
			fieldLabel:'网址',
			vtype:'url'
		},
		{
			fieldLabel:'字母',
			vtype:'alpha'
		},
		{
			fieldLabel:'字母和数字',
			vtype:'alphanum'
		},
		{
			fieldLabel:'IP地址',
			vtype:'IPAddress'
		}]
	});
});