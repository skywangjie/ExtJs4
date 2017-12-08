Ext.define("AM.util.ModelFactory",{
	//数据类模型的集合
	models:new Ext.util.MixedCollection(),
	//字段集合
	fields:new Ext.util.MixedCollection(),
	getModelByName:function(modelName)
	{
		//1声明类 返回ClassName
		if(this.models.containsKey(modelName))
		{
			return modelName;
		}
		else
		{
			var fields = [];
			if(this.fields.containsKey(modelName))
			{
				fields = this.fields.containsKey(modelName);
			}
			else
			{
				Ext.Ajax.request({
					url:'extjs!query.action',
					method:'post',
					timeout:4000,
					async:false,
					params:{modelName:modelName},
					success:function(response,option)
					{
						fields = eval(response.responseText);
					}
				});
			}
			//把对应modelName的字段fields加入字段集合
			this.fields.add(modelName,fields);
			
			var newModel = Ext.define(modelName,{
				extend:"Ext.data.Model",
				fields:fields
			});
			//把对应modelName的类加入数据类模型集合
			this.models.add(modelName,newModel);
			
			return modelName;
		}
	}
});