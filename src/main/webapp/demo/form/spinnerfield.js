Ext.onReady(function(){
	new Ext.form.Panel({
		title:'Ext.form.field.Spinner示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		frame : true,
		height:70,
		width:250,
		renderTo :Ext.getBody(),
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 70,//标签宽度
			width : 200,//字段宽度
			labelAlign : 'left'//标签对齐方式
		},
		items:[{
			xtype : 'spinnerfield',
			fieldLabel:'微调字段',
			id : 'salary',//组件id
			value : 100,//初始化字段值
			onSpinUp : function(){
				var salaryCmp = Ext.getCmp('salary');//通过组件id获取组件对象
				//增加默认值
				salaryCmp.setValue(Number(salaryCmp.getValue()) + 1);
			},
			onSpinDown : function(){
				var salaryCmp = Ext.getCmp('salary');
				//减小默认值
				salaryCmp.setValue(Number(salaryCmp.getValue()) - 1);
			}
		}]
	});
});