Ext.onReady(function(){
	Ext.QuickTips.init();
	var testForm = new Ext.form.Panel({
		title:'Ext.form.field.TextArea示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		frame : true,
		height:200,
		width:500,
		renderTo :Ext.getBody(),
		items:[{
			xtype : 'textarea',
			fieldLabel : '备注',
			id:'memo',//字段组件id
			labelSeparator :'：',//分隔符
			labelWidth : 40,//标签宽度
			width:500
		}],
		buttons:[{text:'确定',handler:showValue}]
	})
	function showValue(){
		var memo = testForm.getForm().findField('memo');//取得输入控件
		alert(memo.getValue());//取得控件值
	}
});