Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		layout:'accordion',
		title:'Ext.layout.container.Accordion布局示例',
		frame:true,//渲染面板
		height : 150,
		width : 250,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		defaults : {//设置默认属性
			bodyStyle:'background-color:#FFFFFF;padding:15px'//设置面板体的背景色
		},
		items: [{
			title : '嵌套面板一',
			html : '说明一'
		},{
			title : '嵌套面板二',
			html : '说明二'
		},{
			title : '嵌套面板三',
			html : '说明三'
		}]
	});
});