Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'面板头部（header）',
		height:200,
		collapsible : true,
		collapseDirection : 'left',
		width:300,
		bodyPaddin:50,//边距
		frame:true,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		bodyStyle:'background-color:#FFC',
		html:'面板体（body）',
		tools : [
			{id:'toggle'},
			{id:'close'},
			{id:'maximize'}
		],
		buttons:[{
			text:'面板底部（footer）'
		}],
		tbar : [{xtype:'button',text:'顶端工具栏(top toolbars)',
			handler:function(o){
				win.show();
			}
		}],
		bbar : [{xtype:'button',text:'底端工具栏(bottom toolbars)'}]
	});
	var win = Ext.create('Ext.window.Window', {
    	title: 'Hello',
    	height: 200,
    	width: 400,
    	layout: 'fit',
    	items: {  
       		html:'window'
    	}
	})
});