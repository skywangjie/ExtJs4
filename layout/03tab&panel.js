Ext.onReady(function(){
	var tabPanel = Ext.create('Ext.tab.Panel',{
		title : 'Ext.tab.Panel示例（动态添加tab页）示例',
		frame : true,
		height : 150,
		width : 300,
		activeTab : 0,//默认激活第一个tab页
		renderTo: Ext.getBody(),
		items : [{
			title: 'tab标签页1',
			html : 'tab标签页1内容'
		}],
		buttons : [{
			text : '添加标签页',
			handler : addTabPage
		}]
	});
	function addTabPage(){
		var index = tabPanel.items.length + 1;
		var tabPage = tabPanel.add({//动态添加tab页
			title: 'tab标签页'+index,
			autoLoad :{
				scripts:true,
				url:'page1.html'
			},
			closable : true//允许关闭
		})
		tabPanel.setActiveTab(tabPage);//设置当前tab页
	}
});