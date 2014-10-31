Ext.onReady(function(){
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.Label示例',
		width : 200,
		frame : true,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		items:[ {
		    xtype: 'label',
		    forId: 'userName',//关联inputId为userName的表单字段
		    text: '用户名'
		   },{
			name:'userName',
			xtype : 'textfield',
			inputId : 'userName',
			hideLabel : true //隐藏字段标签
		}]
	});
});