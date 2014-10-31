Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		layout : 'absolute',
		title:'Ext.layout.container.Absolute布局示例',
		frame:true,//渲染面板
		height : 450,
		width : 300,
		renderTo: Ext.getBody(),
		defaults : {//设置默认属性
			frame : true,
			height : 70,
			width : 100,
			bodyStyle:'background-color:#FFFFFF'//设置面板体的背景色
		},
		items: [{
			x : 10,//横坐标为距父容器左边缘90像素的位置
			y : 10,//纵坐标为距父容器上边缘10像素的位置
			html : '子面板一',
			title : '子面板一'
		},{
			x : 130,//横坐标为距父容器左边缘130像素的位置
			y : 40,//纵坐标为距父容器上边缘40像素的位置
			html : '子面板二',
			title : '子面板二'
		}],
		buttons:[{text:'按钮'}]
	});
});