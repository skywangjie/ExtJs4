Ext.onReady(function(){
	new Ext.form.Panel({
		id:'check',
		title:'CheckboxGroup和RadioGroup组件示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		frame : true,
		height:200,
		width:270,
		renderTo :Ext.getBody(),
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 50,//标签宽度
			width : 200,//字段宽度
			labelAlign : 'left'//标签对齐方式
		},
		items:[
		{
			xtype : 'radiogroup',
			fieldLabel : '性别',
			columns : 2,//2列
			items: [
				{boxLabel : '男',name: 'sex', inputValue: 'male',checked:true},
				{boxLabel : '女',name: 'sex', inputValue: 'female'}
			]
		},
		{
			xtype : 'checkboxgroup',
			fieldLabel : '爱好',
			columns : 3,//3列
			items: [
				{boxLabel : '游泳',name:'hobby',inputValue: 'swim'},
				{boxLabel : '散步',name:'hobby',inputValue: 'walk'},
				{boxLabel : '阅读',name:'hobby',inputValue: 'read'},
				{boxLabel : '游戏',name:'hobby',inputValue: 'game'},
				{boxLabel : '电影',name:'hobby',inputValue: 'movie'}
			]
		}],
		buttons:[
			{text:'确定',handler:function()
				{
					var formObj = Ext.getCmp("check");
					var basic = formObj.getForm();
					var fields = basic.getFields();
					fields.each(function(field)
					{
						if("hobby" == field.getName())
						{
							field.setValue(true);
							alert(field.inputValue);
						}
					});
				}
			}]
	});
});