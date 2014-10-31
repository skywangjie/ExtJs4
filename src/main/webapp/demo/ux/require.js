Ext.define("ux.require",{
	extend:'Ext.window.Window',
	width:400,
	height:200,
	config:{
		price:0
	},
	newtitle:'new',
	mySetTitle:function(){
		this.title = this.newtitle;
	},
	initComponent:function(){
		this.mySetTitle();
		this.callParent(arguments);
	}
})