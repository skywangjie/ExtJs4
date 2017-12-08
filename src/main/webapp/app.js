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
				items:[{
					title: 'north Panel',
					xtype:'box',
					layout:'fit',
					bodyStyle:'background-color:#FFFAF0;padding:15px',//设置面板体的背景色
					html : '<font color=red>管理系统</font>',
					region: 'north',//指定子面板所在区域为north
					height: 20,
					split : false
				},{
					title:"",
					xtype:'panel',
					height:40,
					region:'south'
				},{
					xtype:'tabpanel',
					region: 'center',
					border: false,
					activeTab:0,
					items:[{
						xtype:'panel',
						layout:'fit',
						title : '欢迎使用',
						iconCls:'ext-icon-heart',
						bodyStyle : 'padding:0px',
						html : '<img src="images/bg.jpg"/>'
					}]
				},{
					layout: 'fit',
					region: 'west',
					title: '菜单',
					split: true,
					width: 240,
					items:[{
						xtype:'treepanel',
						width: 200,
						height: 150,
						store: Ext.create('Ext.data.TreeStore',{
							root : {
								id:0,
								text : '树根',// 节点名称
								expanded : true,// 默认展开根节点
								children : [{
									id:'deptlist',
									text : ' 部门',// 节点名称
									leaf : true// true说明为叶子节点
								}, {
									id:'userlist',
									text : '用户',// 节点名称
									leaf : true	// true说明为叶子节点
								}]
							},
							autoLoad:true
						}),
						listeners: {
							itemclick: function (view, record, item, index, e, options) {
								var tabPanel = view.ownerCt.ownerCt.ownerCt.child('tabpanel');
								var tab = tabPanel.getComponent(record.get('id'));
								if (!tab) {
									tab = tabPanel.add({
										xtype:record.get('id')
									})
								}
								console.log(tab);
								tabPanel.setActiveTab(tab);
								tabPanel.doLayout();
							},
							scope: this
						}
					}]
				}]
			});
		},
		controllers:[
			'UserController','DeptController'
		]
	});
})