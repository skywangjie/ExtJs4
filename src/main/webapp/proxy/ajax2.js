Ext.onReady(function() {
	// 创建数据模型
	Ext.regModel("person", {
		fields : [{
				name : 'name',type : 'string'
		}],
		proxy:{
			type:'ajax',
			url : 'person.jsp',
			model : 'person',
			/*reader : 'json'*/
			reader : {
				type:"json"
			}
		}
	});
	var person = Ext.ModelManager.getModel('person');
	person.load(1,{
		scope:this,
		success:function(model){
			alert(model.get('name'));
		}
	});
});
