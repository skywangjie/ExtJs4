Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Ext.layout.container.Column布局示例',
		layout : 'column',
		frame:true,//渲染面板
		height : 150,
		width : 350,
		renderTo: Ext.getBody(),
		defaults : {//设置默认属性
			bodyStyle:'background-color:#FFFFFF;padding:15px',//设置面板体的背景色
			height : 100,
			frame : true
		},
		items: [{
			title:'子面板一',
			width : 100//指定列宽为100像素
		},{
			title:'子面板二',
			columnWidth:.3//指定列宽为容器剩余宽度的30%
		},{
			title:'子面板三',
			columnWidth:.7//指定列宽为容器剩余宽度的70%
		}]
	});
});