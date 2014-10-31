Ext.onReady(function() {
	// 定义用户User模型
	Ext.regModel("User", {
		fields : ['name', 'age']
	});
	// 创建ArrayStore数据集对象
	var myStore = new Ext.data.ArrayStore({
		/*autoLoad : true,*/
		data : [['张三', 20], ['李四', 30]],// 数组数据
		proxy : {
			type:"memory",
			reader:{
				type:"array"
			}
			/*model : 'User'*/
		},
		model : 'User'
	});
	// 遍历Store中的记录
	var msg = ['遍历ArrayStore中的记录：'];
	myStore.load();
	myStore.each(function(rec) {
		msg.push('姓名:' + rec.get('name') + ' 年龄:'+ rec.get('age'));
	});
	alert(msg.join('\n'));
});