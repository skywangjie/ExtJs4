Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title : 'Ext.layout.container.Border布局示例',
		layout:'border',//边框布局
		height : 450,
		width : 400,
		frame : true,
		renderTo: Ext.getBody(),
		defaults : {//设置默认属性
			collapsible : true
		},
		items: [{
			title: 'north Panel',
			html : '上边',
			region: 'north',//指定子面板所在区域为north
			height: 50
		},{
			title: 'South Panel',
			html : '下边',
			region: 'south',//指定子面板所在区域为south
			height: 50
		},{
			title: 'West Panel',
			html : '左边',
			region:'west',//指定子面板所在区域为west
			width: 100
		},{
			title: 'east Panel',
			frameHeader : true,
			frame : true,
			html : '右边',
			region:'east',//指定子面板所在区域为east
			width: 100
		},{
			title: 'Main Content',
			html : '中间',
			region:'center'//指定子面板所在区域为center
		}]
	});
});