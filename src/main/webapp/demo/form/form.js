Ext.onReady(function(){
	Ext.QuickTips.init();//初始化信息提示功能
	var form = new Ext.form.Panel({
			title:'表单',//表单标题
			height:120,//表单高度
			width:200,//表单宽度
			frame:true,//是否渲染表单
			renderTo :Ext.getBody(),
			defaults:{//统一设置表单字段默认属性
				//autoFitErrors : false,//展示错误信息时是否自动调整字段组件宽度
				labelSeparator :'：',//分隔符
				labelWidth : 50,//标签宽度
				width : 150,//字段宽度
				allowBlank : false,//是否允许为空
				blankText : '不允许为空',
				labelAlign : 'left',//标签对齐方式
				msgTarget :'qtip'          //显示一个浮动的提示信息
				//msgTarget :'title'       //显示一个浏览器原始的浮动提示信息
				//msgTarget :'under'       //在字段下方显示一个提示信息
				//msgTarget :'side'        //在字段的右边显示一个提示信息
				//msgTarget :'none'        //不显示提示信息
				//msgTarget :'errorMsg'    //在errorMsg元素内显示提示信息
			},
			items:[{
				xtype : 'textfield',
				id:'name',
				fieldLabel : '姓名'//标签内容
			},{
				xtype : 'numberfield',
				fieldLabel : '年龄'
			}],
			buttons:[{
				text:'提交' ,handler:function()
				{
					var text = form.getForm().findField('name').getValue();
					alert(text);
				}
			}]
		});
});