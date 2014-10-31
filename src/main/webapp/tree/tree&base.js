Ext.onReady(function() {
	var tree = Ext.create('Ext.tree.Panel', {
			title : '树面板简单示例',
			width : 150,
			height : 100,
			renderTo : Ext.getBody(),
			root : {
					text : '树根',// 节点名称
					expanded : true,// 默认展开根节点
					children : [
					{
						text : '节点一',// 节点名称
						leaf : true// true说明为叶子节点
					}, 
					{
						text : '节点二',// 节点名称
						leaf : true	// true说明为叶子节点
					}]
			}
	});
});