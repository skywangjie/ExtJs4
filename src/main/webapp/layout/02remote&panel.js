Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'面板加载远程页面',
		height:450,//设置面板的高度
		width:250,//设置面板的宽度
		frame:true,//渲染面板
		autoScroll : true,//自动显示滚动条
		collapsible : true,//允许展开和收缩
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		autoLoad :'page1.html',//自动加载面板体的默认连接
//		contentEl :'localElement',//加载本地资源  id属性
		bodyStyle:'background-color:#FFFFFF'//设置面板体的背景色
	});
});