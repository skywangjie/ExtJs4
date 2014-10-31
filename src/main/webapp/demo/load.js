Ext.Loader.setConfig({
	enabled:true,
	paths:{
		myApp:'ux'
	}
});
/*Ext.Loader.setPath("ux","ux");
Ext.require("ux.require");*/
Ext.onReady(function(){
	Ext.get("btn").on("click",function(){
		var win = Ext.create("ux.require",{
			title:'aaa',
			price:500,
			requires:['ux.require']
		})
		win.show();
		alert(win.getPrice());
	});
});

