Ext.onReady(function(){
	Ext.regModel("person",{
		fields:[
			{name:'name',type:'string'},
			{name:'age',type:'int'}
		],
		proxy:{
			type:"memory",
			reader : {
				type:"array"
			},
			data: [{name:'monday',age:1},{name:'friday',age:26}]
		}
	});
	var store = new Ext.data.Store(
	{
		/*autoLoad : true,//配置了这个，store.load();就可以不用*/		
		model:"person"
	});
	store.load();
	store.each(function(record){
		alert(record.get('name'));
	});
});