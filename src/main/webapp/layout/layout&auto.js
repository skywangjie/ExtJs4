Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Auto布局',
		frame:true,//渲染面板
		width : 250,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		layout : 'auto',//自动布局
		defaults : {//设置默认属性
			bodyStyle:'background-color:#FFFFFF'//设置面板体的背景色
		},
		//面板items配置项默认的xtype类型为panel，
		//该默认值可以通过defaultType配置项进行更改
		items: [{
			title : '嵌套面板一',
			html : '面板一'
		},{
			title : '嵌套面板二',
			html : '面板二'
			}]
	});
});