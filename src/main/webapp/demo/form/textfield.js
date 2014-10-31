Ext.onReady(function(){
	Ext.QuickTips.init();
	var loginForm = new Ext.form.Panel({
		title:'Ext.form.field.Text示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		frame : true,//是否渲染表单
		height:120,
		width:200,
		renderTo :Ext.getBody(),
		defaultType: 'textfield',//设置表单字段的默认类型
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 50,//标签宽度
			width : 150,//字段宽度
			allowBlank : false,//是否允许为空
			labelAlign : 'left',//标签对齐方式
			msgTarget :'side'   //在字段的右边显示一个提示信息
		},
		items:[{
				fieldLabel : '用户名',
				name : 'userName',
				selectOnFocus : true,//得到焦点时自动选择文本
				//验证电子邮件格式的正则表达式
				regex : /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,4}$/,
				regexText:'格式错误'//验证错误之后的提示信息,
			},{
				name : 'password',
				fieldLabel : '密码',
				inputType : 'password'//设置输入类型为password
			}
		],
		buttons:[{
			text : '登陆',
			handler : function(){
				loginForm.form.setValues({userName:'user@163.com',password:'123456'});
			}
		}]
	});
});