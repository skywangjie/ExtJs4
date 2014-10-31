Ext.onReady(function() {
	// 注册用户数据模型User
	Ext.regModel('User', {
		fields : [// 定义模型字段
			{name : 'name',type : 'string'},// 用户名称
			{name : 'id',type : 'int'}// 用户id
		],
		// User与Product是一对多关系
		hasMany : {
			model : 'Product',
			name : 'getProducts',
			autoLoad : false
		},
		proxy : {
			type : 'ajax',
			url : 'userServer.jsp'
		}
	});
	// 注册产品数据模型Product
	Ext.regModel('Product', {
		fields : [// 定义模型字段
			{name : 'id',type : 'int'},// 产品id
			{name : 'title',type : 'string'},// 产品名称
			{name : 'user_id',type : 'int'}// 用户id
		],
		proxy : {
			type : 'ajax',
			url : 'ProductServer.jsp',
			reader : {
				type : 'json',
				root : 'products'
			}
		}
	});
	var user = Ext.ModelManager.getModel('User');
	// 读取id为1的User实例
	user.load(1, {
			success : function(rec) {
			// 获取user_id为1的产品Store
			var products = rec.getProducts();
			// 加载user_id为1的产品数据
			products.load({
				callback : function(records, operation, success) {
						var msg = [];
						for (var i = 0; i < records.length; i++) {
						var rec = records[i];
						msg.push('产品名称：'+ rec.get('title')
								+ ' 用户id：'+ rec.get('user_id'));
						}
				alert(msg.join('\n'));
				}
			});
			}
	});
});