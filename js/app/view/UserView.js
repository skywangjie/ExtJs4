Ext.define("AM.view.UserView",{
	extend:"Ext.grid.Panel",
	title : '用户',
	alias:'widget.userlist',
	itemId:'userlist',
	frame :true,
	closable:true,
	padding:0,
	columns : [
			Ext.create("Ext.grid.RowNumberer",{}),
			{text:"姓名",dataIndex:'name',width:100,
				field:{
					xtype:"textfield",
					allowBlank:false
				}
			},
			{text:"年龄",dataIndex:'age',width:100,
				field:{
					xtype:"textfield",
					allowBlank:false
				}
			},
			{text:"邮箱",dataIndex:'email',width:360,
				field:{
					xtype:"textfield",
					allowBlank:false
				},
				renderer:function(value){
					return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
				}
			},
			{text:'性别',dataIndex:'sex',
				renderer:function(value){
					if(value == '男'){
						return "<span style='color:red;font-weight:bold;'>男</span><img src='images/user_male.png' />";
					}else if(value == '女'){
						return "<span style='color:green;font-weight:bold;'>女</span><img src='images/user_female.png' />";
					}
				}
			},
			{text:'生日',dataIndex:'birthday',xtype:'datecolumn',format:'Y年m月d日',
				field:{
					xtype:'datefield',
					disabledDays:[0,6],
					disabledDatesText:'这个日期不可选'
				}
			},
			{
				text:'描述',xtype:'templatecolumn',tpl:'姓名是<font color=red>{name}</font>年龄是{age}',width:400
			}
	],
	tbar : [
			{xtype:'button',id:'add',text:'添加',iconCls:'table_add'},
			{xtype:'button',id:'remove',text:'删除',iconCls:'table_remove'},
			{xtype:'button',id:'update',text:'修改',iconCls:'table_edit'},
			{xtype:'textfield',id:'searchText',width : 150,emptyText:'支持模糊查询'},
			{xtype:'button',id:'search',text:'查看',iconCls:'table_search'}
	],
	dockedItems :[{
			xtype:'pagingtoolbar',
			store: 'UserStore',
			dock :'bottom',
			displayInfo: true
	}],
	/*plugins:[
			Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1})			
	],*/
	selType:'checkboxmodel',
	multiSelect:true,//允许多选
	store : 'UserStore',
	initComponent:function(){
		this.editing = Ext.create("Ext.grid.plugin.CellEditing",{}),
		this.plugins = [this.editing],
		this.callParent(arguments);
	}
});
var win = Ext.create("Ext.Window",{
    title:'新增用户',
    layout:'fit',
    width:500,
    height:300,
    closeAction:'hide',
    items: [{
     	xtype:'form',
     	id:'loginForm',
     	frame:true,
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
			}],
		buttons:[{
			text : '保存',
			handler : function(){
				Ext.getCmp('loginForm').form.setValues({userName:'user@163.com',password:'123456'});
			}
		},{
			text : '取消',
			handler : function(){
				Ext.getCmp('loginForm').ownerCt.hide();
//				this.ownerCt.ownerCt.hide();
//				win.hide();
			}
		}]
      }]
});
