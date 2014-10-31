Ext.onReady(function() {
	// 定义用户User模型
	Ext.regModel("User", {
			fields : ['id', 'name', 'age'],
			proxy : {
				type : 'ajax',
				url : 'writerServer.jsp',
				writer : {
					type : 'json'// Ext.data.writer.Json读取器
				}
			}
	});

	// 创建User模型的实体对象
	var user = Ext.ModelMgr.create({id : 1,name : 'tom',age : 24},'User');

	// 保存数据，【格式化后的数据】将被发往服务端
	user.save({
		success : function() 
		{
			alert("数据保存成功")
		},
		failure : function() 
		{
			alert("数据保存失败")
		}
	});
});