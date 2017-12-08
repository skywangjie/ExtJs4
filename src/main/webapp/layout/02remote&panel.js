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
		/*autoLoad:'page1.html',*/
		autoLoad :{
			scripts:true,
			url:'page1.html'
		},
//		contentEl :'localElement',//加载本地资源  id属性
		bodyStyle:'background-color:#FFFFFF'//设置面板体的背景色
	});
	Ext.create('Ext.window.Window', {
		title : '浏览小图标',
		width : 850,
		height : 450,
		closable : true,
		autoScroll:true,
		autoLoad:{
			scripts:true,
			url:'page1.html'
		}
	}).show();
});