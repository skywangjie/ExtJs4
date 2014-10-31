Ext.onReady(function() {
	// 定义用户User模型
	Ext.regModel("User", {
		fields : ['name', 'age']
	});
	// 创建数据集对象
	var myStore = new Ext.data.Store({
		/*autoLoad : true,*/
		data : [{name : '张三',age : 20}, {name : '李四',age : 30}],
		model : 'User',
		proxy : {
			type : 'memory',
			reader:{
				type:"array"
			}
			/*model : 'User'*/
		}
	});
	// 遍历Store中的记录
	var msg = ['遍历Store中的记录：'];
	myStore.load();
	myStore.each(function(model) {
		msg.push('姓名:' + model.get('name') + ' 年龄:'
			+ model.get('age'));
	});
	alert(msg.join('\n'));
});