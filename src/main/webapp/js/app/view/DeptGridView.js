Ext.define("AM.view.DeptGridView",{
	extend:"Ext.grid.Panel",
	title : 'demo',
	alias:'widget.deptGrid',
	frame :true,
	columns : [
			Ext.create("Ext.grid.RowNumberer",{}),
			{text:"部门名称",dataIndex:'text',width:100,
				field:{
					xtype:"textfield",
					allowBlank:false
				}
			},
			{text:"部门经理",dataIndex:'manager',width:100,
				field:{
					xtype:"textfield",
					allowBlank:false
				}
			},
			{text:"顺序排序",dataIndex:'orderIndex',width:100},
			{text:'职能简介',dataIndex:'info',width:360}
	],
	tbar : [
			{xtype:'button',id:'addDept',text:'添加',iconCls:'table_add'},
			{xtype:'button',id:'deleteDept',text:'删除',iconCls:'table_remove'},
			{xtype:'button',id:'saveDept',text:'保存',iconCls:'table_edit'},
			{xtype:'textfield',id:'searchDeptText',width : 150,emptyText:'支持模糊查询'},
			{xtype:'button',id:'searchDept',text:'查看',iconCls:'table_search'}
	],
	dockedItems :[{
			xtype:'pagingtoolbar',
			store: 'DeptGridStore',
			dock :'bottom',
			displayInfo: true
	}],
	/*plugins:[
			Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1})			
	],*/
	selType:'checkboxmodel',
	multiSelect:true,//允许多选
	store : 'DeptGridStore',
	initComponent:function(){
		this.editing = Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1}),
		this.plugins = [this.editing],
		this.callParent(arguments);
	}
});
