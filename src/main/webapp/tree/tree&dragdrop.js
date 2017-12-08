Ext.onReady(function() {
	// 创建树面板一
	Ext.create('Ext.tree.Panel', {
			title : '树一',
			width : 200,
			height : 150,
			renderTo : 'tree1',
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
						leaf : true// true说明为叶子节点
					}]
			},
			viewConfig : {
					plugins : {
							allowContainerDrop : true,
							ptype : 'treeviewdragdrop',
							nodeHighlightOnRepair : true
					}
			}
	});

	// 创建树面板二
	Ext.create('Ext.tree.Panel', {
			title : '树二',
			width : 200,
			height : 150,
			renderTo : 'tree2',
			root : {
					text : '树根',
					expanded : true
			},
			viewConfig : {
					plugins : {
							allowContainerDrop : true,
							ptype : 'treeviewdragdrop'
					}
			}
	});
});