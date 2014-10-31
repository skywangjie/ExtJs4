Ext.onReady(function() {
	// 创建数据模型
	Ext.regModel("person", {
		fields : [{
				name : 'name',type : 'string'
		}]
	});
	/**
	 * 异步加载的方式
	 */
	// 创建Ajax代理
	var ajaxProxy = new Ext.data.proxy.Ajax(
	{
		url : 'person.jsp',
		model : 'person',
		/*reader : 'json',*/
		reader : {
			type:"json"
		},
		limitParam : 'indexLimit',//可修改 默认limit
		actionMethods: {
	        create : 'POST',
	        read   : 'POST',
	        update : 'POST',
	        destroy: 'POST'
    	}
	});
	
	ajaxProxy.doRequest(
		new Ext.data.Operation({
			action : 'read',// 设置请求动作为read
			limit : 15,
			start : 0,
			sorters : [
				new Ext.util.Sorter({
					property : 'name',
					direction : 'ASC'
				})]
		}),
		function(obj) 
		{
			var responseText = obj.response.responseText;
			alert(Ext.JSON.decode(responseText)['name']);
			// 获取原始响应数据 打印【{name:'uspcat.com'}】
			alert(responseText);
			// 获得记录总数
			var totalRecords = obj.resultSet.totalRecords;
			alert('使用Ajax代理读取远程数据，记录总是：' + totalRecords);
			// 获得记录数组
			var records = obj.resultSet.records;
			alert(records);
		}
	);
});
