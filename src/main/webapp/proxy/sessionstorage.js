Ext.onReady(function(){
	Ext.regModel("user",{
		fields:[
			{name:'name',type:'string'}
		],
		proxy:{
			type:'sessionstorage'//浏览器级别代理
		}
	});
		
	var store = new Ext.data.Store({
		model:user
	});
	// 添加数据
	store.add({name:'dreamsunday'});
	// 保存数据
	store.sync();
	// 读取数据
	store.load();
	var msg = [];
	store.each(function(record)
	{
		msg.push(record.get('name'));
	});
	alert(msg.join("\n"));
	
})