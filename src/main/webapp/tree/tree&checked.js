Ext.onReady(function() {
	var tree = Ext.create('Ext.tree.Panel', {
			title : '复选框示例',
			width : 150,
			height : 300,
			renderTo : Ext.getBody(),
			root : {
					text : '树根',// 节点名称
					expanded : true,// 默认展开根节点
					checked:false,
					children : [
					{
						text : '节点一',// 节点名称
						checked : true,// 默认选中
						leaf : false,// true说明为叶子节点
						children :[
						{
							text:'节点一一',
							checked:false,
							leaf:true
						},
						{
							text:'节点一二',
							checked:false,
							leaf:true
						}]
					}, 
					{
						text : '节点二',// 节点名称
						checked : false,// 默认不选中
						leaf : true// true说明为叶子节点
					}]
			},
			listeners:{
				checkchange:function(node,checked,options)
				{
					if(node.data.leaf == false)//不是叶子
					{
						if(checked)
						{
							//打开节点
							node.expand();
							//遍历孩子
							node.eachChild(function(n){
								n.data.checked = true;
								n.updateInfo({checked:true});
							})
						}
						else
						{
							node.expand();
							node.eachChild(function(n){
								n.data.checked = false;
								n.updateInfo({checked:false});
							})
						}
					}
					else
					{
						if(!checked)
						{
							node.parentNode.data.checked = false;
							node.parentNode.updateInfo({checked:false});
						}
					}
				}
			}
	});
});