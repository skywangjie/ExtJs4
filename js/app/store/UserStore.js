//User数据集合类
Ext.define("AM.store.UserStore",{
	extend:"Ext.data.Store",
	storeId:'s_user',
	model:'AM.model.UserModel',
	proxy:{
		type: 'ajax',
		url: 'user!query.action',
		reader:{
			type: "json",
			root: "userInfosList"
		},
		writer:{
			type: "json"
		}
	},
	autoLoad: true
});
