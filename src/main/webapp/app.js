Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.Loader.setConfig({
		enabled:true
	});
	Ext.application({
		name:"AM",
		appFolder:"js/app",
		launch:function(){
			var view = Ext.create("Ext.container.Viewport",{
				layout:'border',
				defaults : {
					collapsible : true,
					split : true
				},
				items: [
				{
					title: 'north Panel',
					xtype:'box',
					layout:'fit',
					bodyStyle:'background-color:#FFFAF0;padding:15px',//设置面板体的背景色
					html : '<font color=red>管理系统</font>',
					region: 'north',//指定子面板所在区域为north
					height: 20,
					split : false
				},
				{
					title: '导航栏',
					itemId:'west-dept-tree',
					region:'west',//指定子面板所在区域为west
					layout:'accordion',
					iconCls:'table_add',
					width: 200
				},
				{
					title: '工作间',
					xtype:'tabpanel',
					region:'center',//指定子面板所在区域为center
					activeTab : 0,//默认激活第一个tab页
					defaults:{
						closable:true
					},
					items : [
					{
						id : 'start-panel',
						title : '欢迎使用',
						layout : 'fit',
						bodyStyle : 'padding:25px',
						html : '<img src="images/bg.jpg"/>'
					},
					{
						xtype :'userlist',
						bodyStyle : 'padding:0',
						title :'用户列表'
					},
					{
						xtype :'deptGrid',
						bodyStyle : 'padding:0',
						title :'部门列表'
					}]
				},
				{
					title:"",
					xtype:'panel',
					height:40,
					region:'south'
				}]
			});
			Ext.Ajax.request({
                url : 'data.json',
                method : 'post',
                success:function(response,option){
                    var result = Ext.JSON.decode(response.responseText);
                    Ext.each(result,function(data){
                    	view.down('#west-dept-tree').add(data);
                    })
                }
            });
		},
		controllers:[
			'UserController','DeptController'
		]
	});
})