Ext.onReady(function() {
	var treestore = Ext.create('Ext.data.TreeStore',{
		root : {
			id:0,
			text : '树根',// 节点名称
			expanded : true,// 默认展开根节点
			children : [
			{
				id:1,
				text : '节点一',// 节点名称
				leaf : true// true说明为叶子节点
			}, 
			{
				id:2,
				text : '节点二',// 节点名称
				leaf : true	// true说明为叶子节点
			}]
		}
	});
	/*var tree = Ext.create('Ext.tree.Panel', {
			title : '树面板简单示例',
			width : 150,
			height : 100,
			renderTo : Ext.getBody(),
			store:treestore
	});*/
	var formpanel = Ext.create('Ext.form.Panel',{
		title:'表单',//表单标题
		height:250,//表单高度
		width:200,//表单宽度
		frame:true,//是否渲染表单
		renderTo :Ext.getBody(),
		trackResetOnLoad: true,
		items:[{
			xtype : 'textfield',
			name:'data.name',
			fieldLabel : '姓名'//标签内容
		},{
			xtype : 'treepicker',
			store: treestore,
			name:'name',
			fieldLabel : '树'//标签内容
		}],
	});
	console.info(treestore.getRootNode());
	console.info(treestore.getNodeById(1));
	
});