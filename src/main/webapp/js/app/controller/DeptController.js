Ext.define("AM.controller.DeptController",{
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
								//从剪切板中拿到数据
								var nodes = tree.getCopynodes();
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
									checked:false,
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////				
				"deptGrid button[id=addDept]":{
						click:function(addButton){
							var grid = addButton.ownerCt.ownerCt;
							var ID = Math.round(Math.random()*100);
							var modelObj = {
								text : "",
								id : ID,
								info: "",
								orderIndex: "0",
								manager: "",
								checked:false,
								leaf:true
							};
							var tree = addButton.ownerCt.ownerCt.ownerCt.ownerCt.
							child('#west-dept-tree').child('#dept-Tree');
							Ext.create("AM.util.GridDoAction",{}).doInsert(grid,modelObj,tree);
						}
				},
				"deptGrid button[id=saveDept]":{
						click:function(saveButton){
							var grid = saveButton.ownerCt.ownerCt;
							var tree = saveButton.ownerCt.ownerCt.ownerCt.ownerCt.
							child('#west-dept-tree').child('#dept-Tree');
							Ext.create("AM.util.GridDoAction",{}).doSave(grid,tree);
						}
				},
				"deptGrid button[id=deleteDept]":{
						click:function(deleteDept){
							var grid = deleteDept.ownerCt.ownerCt;
							var tree = deleteDept.ownerCt.ownerCt.ownerCt.ownerCt.
							child('#west-dept-tree').child('#dept-Tree');
							Ext.create("AM.util.GridDoAction",{}).doDelete(grid,tree);
						}
				}
		});
	},
	views:[
		'DeptTreeView','DeptGridView'
	],
	stores:[
		'DeptTreeStore','DeptGridStore'
	],
	models:[
		'DeptGridModel','DeptTreeModel'
	]
});