Ext.onReady(function() {
	// JSON格式的用户及订单信息
	var userData = {
		"total" : 2000,
		"users" : [{
				"id" : 123,
				"name" : "张三",
				"orders" : [{
						"id" : 50,
						"total" : 100
					}]
				}]
	};
	// 定义用户User模型
	Ext.regModel("User", {
			fields : ['id', 'name'],
			proxy:{
				type:"memory",
				data : userData,
				reader:{
					type : 'json',// Ext.data.reader.Json读取器
					totalProperty: 'total',
					root : 'users'
				}
			},
			hasMany : 'Order'// 定义User与Order之间的一对多关系
	});
	// 定义订单Order模型
	Ext.regModel("Order", {
			fields : ['id', 'total'],
			belongsTo : 'User'// 定义Order与User之间的多对一关系
	});
	var store = new Ext.data.Store(
	{
		model:"User"
	});
	store.load();//不是异步可以load
	store.each(function(record){
		alert(record.get('name'));
	});

});