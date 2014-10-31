Ext.onReady(function() {
	// 定义用户User模型
	Ext.regModel("User", {
			fields : ['id', 'name'],
			proxy : {
				type : 'ajax',
				url : 'xmlServer.jsp',
				reader : {
					type : 'xml',// Ext.data.reader.Xml解析器
					record : 'user'
				}
			}
	});

	var user = Ext.ModelManager.getModel('User');
	// 通过代理读取数据
	user.load(1, {
		success : function(rec) 
		{
			alert("XML读取器示例：\n" + "用户姓名：" + rec.get('name'));
		}
	});
});