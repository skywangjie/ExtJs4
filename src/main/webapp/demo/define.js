Ext.onReady(function(){
	
	Ext.define("User",{
		name:"test",
		config:{
			username:"tom",
			password:"123456"
		},
		say:function(){
			return "hello";
		},
		//不用这个，config的配置，初始化将会无用
		constructor:function(config){
			var me = this;
			me.initConfig(config);
		}
	});
	var u = new User({username:"jack",password:"123"})
	alert(u.name+"|"+u.username+"|"+u.getUsername()+"|"+u.say());
	Ext.define("People",{
		extend:"User",
		age:24
	})
	var p = Ext.create("People",{});
	alert(p.name+"|"+p.username+"|"+p.getUsername()+"|"+p.say()+"|"+p.age);
	
});