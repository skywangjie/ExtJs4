Ext.onReady(function(){
	Ext.define('User', {  
	    extend: 'Ext.data.Model',  
	    fields: ['id', 'name', 'email']  
	});  
	  
	//一个包含AjaxProxy代理的Store, 使用参数方式绑定.  
	var store = Ext.create('Ext.data.Store', {  
	    model: 'User',  
	    proxy: {  
	        type: 'ajax',  
	        url : 'data.json',
	        reader:{
	        	type:'json'
	        }
	    }  
	});  
	store.load();  
	store.each(function(record){  
	    console.info(record);  
	},this);
	/////////////////////////////////////////////////
	var operation = new Ext.data.Operation({  
	    action: 'read',  
	    page  : 2  
	});  
	var proxy = new Ext.data.proxy.Ajax({  
	    url: 'data.json',
	    reader:{
        	type:'json'
        }
	});  
	console.info(proxy);  
	proxy.read(operation); //GET /data.json?page=2  
	
});