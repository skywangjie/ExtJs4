Ext.onReady(function(){
	Ext.regModel("person",{
		fields:[
			{name:'name',type:'string'},
			{name:'age',type:'int'}
		]
	});
		
	var userData = [
		{name:'monday',age:1},
		{name:'friday',age:26}
	];
	/**
	 * 普通的内存代理
	 */	
	var memoryProxy = Ext.create("Ext.data.proxy.Memory",{
		data:userData,
		model:'person'
	})
		
	userData.push({name:'sunday',age:1});
		
	memoryProxy.update(
		new Ext.data.Operation(
		{
			action:'update',
			data:userData
		}),
		function(result){},
		this
	);
		
	memoryProxy.read(
		new Ext.data.Operation(),
		function(result)
		{
			var datas = result.resultSet.records;
			Ext.Array.each(datas,function(model)
			{
				alert(model.get('name'));
			});
			var totalRecords = result.resultSet.total;
			alert('读取内存数据，记录总是：' + totalRecords);
	});
	
	
});