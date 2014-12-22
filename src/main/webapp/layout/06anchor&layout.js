Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		layout : 'anchor',
		title:'Ext.layout.container.Anchor布局示例',
		frame:true,//渲染面板
		height : 500,
		width : 500,
		renderTo: Ext.getBody(),
		defaults : {//设置默认属性
			bodyStyle:'background-color:#FFFFFF;padding:15px'//设置面板体的背景色
		},
		items: [
		{
			/*
			 *anchor:'75% 25%'，表示宽度为父容器的75%，高度为父容器的25%
			 *anchor:'-300 -200'，表示组件相对于父容器右边距为300，相对于父容器的底部位200
			 *anchor:'-250 20%'，混合模式，表示组件党对于如容器右边为250，高度为父容器的20%
			 */
			xtype:'panel',
			anchor : '50% 50%',//设置子面板的宽高为父面板的50%
			title : '子面板 50%宽 50%高'
		},
		{
			xtype:'panel',
			anchor : '-100 -200',
			title : '子面板 右边距为100 底部位200 '
		}]
	});
});