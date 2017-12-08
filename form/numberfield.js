Ext.onReady(function(){
	Ext.QuickTips.init();
	var form = new Ext.form.FormPanel({
		title:'Ext.form.field.Number示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		renderTo :Ext.getBody(),
		frame : true,
		height:250,
		width:250,
		defaultType: 'numberfield',//设置表单字段的默认类型
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 80,//标签宽度
			width : 200,//字段宽度
			labelAlign : 'left',//标签对齐方式
			msgTarget :'side'   //在字段的右边显示一个提示信息
		},
		items:[
		{
			id :'num1',
			name :'num1',
			fieldLabel:'整数',
			hideTrigger : true,//隐藏微调按钮
			allowDecimals : false,//不允许输入小数
			nanText :'请输入有效的整数'//无效数字提示
		},
		{
			id :'num2',
			name :'num2',
			fieldLabel:'小数',
			decimalPrecision : 2,//精确到小数点后两位
			allowDecimals : true,//允许输入小数
			emptyText:'请输入小数',
			nanText :'请输入有效的小数',//无效数字提示
			step :0.05
		},
		{
			id :'num3',
			name :'num3',
			fieldLabel:'数字限制',
			hideTrigger : true,//隐藏微调按钮
			baseChars :'12345'//输入数字范围
		},
		{
			id :'num4',
			name :'num4',
			fieldLabel:'数值限制',
			step:5,
			maxValue : 100,//最大值
			minValue : 50//最小值
		},
		{
			id :'num5',
			name :'num5',
			fieldLabel:'只读字段',
			value :20,
			disabled :true
		}],
		buttons:[{
			text:'提交' ,handler:function()
			{
				var text = form.getForm().findField('num5').getValue();
				alert(text);
			}
		}]
	});
});
