Ext.define("AM.controller.deptController",{
	extend:'Ext.app.Controller',
	init:function(){
		this.control({
				"deptTree button[id=copy]":{
						click:function(b,e){
							var tree = b.ownerCt.ownerCt;
							//得到数据集合
							var nodes = tree.getChecked();
							if(nodes.length>0){
								//把数据放到剪切板中
								tree.setCopyNodes(Ext.clone(nodes));
								alert("拷贝"+nodes.length+"个节点")
								for(i=0;i<nodes.length;i++){
									nodes[i].data.checked = false;
									nodes[i].updateInfo();
								}
							}
						}
				},
				"deptTree button[id=paste]":{
						click:function(b,e){
							var tree = b.ownerCt.ownerCt;
							var checkednodes = tree.getChecked();
							if(checkednodes.length==1){
								//被追加的孩子节点
								var node = checkednodes[0];
								var nodes = tree.getCopyNodes();
								if(nodes.length>0){
									for(i=0;i<nodes.length;i++){
										var n = nodes[i].data;
										n['id'] = n['id']+'1';
										node.appendChild(n)
									}
								}
								
							}else{
								alert("剪切板中无数据,")
							}
						}
				},
				"deptTree button[id=delete]":{
						click:function(b,e){
							var tree = b.ownerCt.ownerCt;
							//得到数据集合
							var nodes = tree.getChecked();
							for(i=0;i<nodes.length;i++){
								nodes[i].remove(true);
							}
						}
				},
				"deptTree button[id=allopen]":{
						click:function(b,e){
							var tree = b.ownerCt.ownerCt;
							tree.expandAll();
						}
				},
				"deptTree button[id=allclose]":{
						click:function(b,e){
							var tree = b.ownerCt.ownerCt;
							tree.collapseAll();
						}
				},
				"deptTree button[id=add]":{
						click:function(b,e){
							var tree = b.ownerCt.ownerCt;
							var nodes = tree.getChecked();
							if(nodes.length==1){
								var node = nodes[0];
								node.appendChild({
									text:'技术架构组',
									checked:true,
									id:'0103',
									leaf:true
								})
							}else{
								alert("请您选择一个节点")
							}
						}
				},
				"deptTree":{
						itemclick:function(tree,record,item,index,e,options){
							alert(record.get('id'));
						}
				},
				"deptTree":{
						checkchange:function(node,checked,options){
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
	},
	views:[
		'deptView'
	],
	stores:[
		'deptStore'
	],
	models:[
		
	]
});