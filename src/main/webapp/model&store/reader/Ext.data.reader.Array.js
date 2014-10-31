Ext.onReady(function() {
	// 定义用户User模型
	Ext.regModel("User", {
			fields : ['id', 'name', 'age'],
			proxy : {
				type : 'ajax',
				url : 'arrayServer.jsp',
				reader : {
					type : 'array'// Ext.data.reader.Array读取器
				}
			}
	});

	var user = Ext.ModelManager.getModel('User');
	// 通过代理读取数据
	user.load(1, {
		success : function(rec) {
			alert("Array读取器示例：" + "\nID：" + rec.get('id')+ "\n姓名：" + rec.get('name') + "\n年龄："+ rec.get('age'));
		}
	});
	
});