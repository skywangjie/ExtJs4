Ext.define("AM.view.DeptTreeView",{
	extend:'Ext.tree.Panel',
	alias:'widget.deptTree',
	title:'部门树形',
	width:350,
	height:300,
	rootVisible:false,
	config:{
		copyNodes:''//充当剪切板的作用
	},
	columns : [
			{
				xtype : 'treecolumn',// 树状表格列
				text : '名称',
				dataIndex : 'text',
				width : 100,
				sortable : true
			}, 
			{
				text : '级别',
				dataIndex : 'level',
				flex : 1,
				padding:'0 2 0 2',
				sortable : true
			}, 
			{
				text : '描述',
				dataIndex : 'info',
				flex : 2,
				sortable : true
			}
	],		
	viewConfig:{
		plugins:{
			ptype:'treeviewdragdrop',
			appendOnly:true
		},
		listeners:{
			drop:function(node,data,overModel,dropPosition,dropFunction,options){
				alert("把"+data.records[0].get('text')+"移动到"+overModel.get('text'));
			},
			beforedrop:function(node,data,overModel,dropPosition,dropFunction,options){
				/*if(overModel.get("leaf")){
					overModel.set("leaf",false)
				}*/
			}
		}
	},
	dockedItems:[
		{
			xtype:'toolbar',
			dock:'left',
			items:[
				{xtype:'button',text:'添加',id:'add',iconCls:'table_add'},
				{xtype:'button',text:'复制',id:'copy',iconCls:'table_add'},
				{xtype:'button',text:'删除',id:'delete',iconCls:'table_remove'},
				{xtype:'button',text:'粘贴',id:'paste',iconCls:'table_add'}
			]
		},
		{
			xtype:'toolbar',
			items:[
				{xtype:'button',text:'展开全部',id:'allopen'},
				{xtype:'button',text:'关闭全部',id:'allclose'}
			]
	}],
	store:'DeptTreeStore'

})
