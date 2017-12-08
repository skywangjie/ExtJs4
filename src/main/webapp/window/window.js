Ext.onReady(function() {
	var btn = Ext.get("btn");
	
	btn.on("click",function(){
		Ext.create("Ext.window.Window",{
			id:"mywin",
			title:"window",
			height:400,
			width:400,
			draggable : false,
			resizable:false,
			items:[{
				xtype:"panel",
				width:"100%",
				height:"100%",
				html:"我是面板"
			}],
			tbar:[{
				text:"按钮1",
				handler:function(btn){
					//组建都会有up down这两个方法（表示向上向下查找） 需要的参数是组建的xtype 或选择器
					var title = btn.up("window").title
					alert(title);
				}
			},{
				text:"按钮2",
				handler:function(btn){
					var title = Ext.getCmp("mywin").title;
					alert(title);
				}
			},{
				text:"按钮3",
				handler:function(btn){
					var title = btn.ownerCt.ownerCt.title;
					alert(title);
				}
			}],
			renderTo:Ext.getBody()
		}).show();
	});
});
