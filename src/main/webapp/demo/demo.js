Ext.onReady(function(){
	
	//模型注册EXT第一种方式
	Ext.define("User1",{
		extend:"Ext.data.Model",
		fields:[
		{
			name:'username',
			type:'auto'
		},
		{
			name:'password',
			type:'auto'
		}],
		validations:[
		{
			type:'length',field:'username',min:2,max:10
		},
		{
			type:'password',field:'password',min:6,max:20
		}]
	});
	//模型注册EXT第二种方式
	Ext.regModel("User2",{
		fields:[
		{
			name:'username',
			type:'auto'
		},
		{
			name:'password',
			type:'auto'
		}]
	});
	//模型注册javascript第一种方式
	function User3(username,password)
	{
		this.username = username,
		this.password = password
	}
	var uu3 = new User3('dream','123')
	alert(uu3.username);
	//---------------------------------------------------------------------
	//模型注册javascript第二种方式
	var User41 = {};
	User41.username = "dream4";
	User41.password = '123456';
	User41.say = function(){
		alert("dream41|123456")
	};
	alert(User41.username);
	User41.say();
	
	var User42 = {
		username : "dream4",
		password : '123456',
		say : function(){
			alert("dream42|123456")
		}
	};
	alert(User42.username);
	User42.say();
	//---------------------------------------------------------------------
	//************************************************************************
	
	//实例化对象1
	var u1 = new User1(
	{
		username:'dream1sunday',
		password:'12345'
	});
	var u2 = new User2(
	{
		username:'dream2',
		password:'123456'
	});

	alert(u1.get('username'));
	alert(u2.get('username'));
	
	Ext.data.validations.lengthMessage = "错误的长度";
	Ext.apply(Ext.data.validations,{//扩展验证
		password:function(config,value){
			var min = config.min;
			var max = config.max;
			if(min <= value.length&&value.length <= max){
				return true;
			}else{
				this.passwordMessage = this.passwordMessage+"它应该在["+min+"-"+max+"]";
				return false;
			}
		},
		passwordMessage:'密码长度不对'
	});
	
	//校验数据
	var errors = u1.validate();
	var errorInfo = [];
	errors.each(function(v){
		errorInfo.push(v.field+" "+v.message);
	});
	alert(errorInfo.join('\n'));
	//************************************************************************
	//实例化对象2
	var u3 = Ext.create("User1",
	{
		username:'dream3',
		password:'123456'
	});
	var u4 = Ext.create("User2",
	{
		username:'dream4',
		password:'123456'
	});
	u3.age = 100;
	alert(u3.get('username'));
	alert(u4.get('username'));
	Ext.Msg.alert("提示","<font color=red>"+u3.age+"</font>")
	
	//************************************************************************
	//实例化对象3
	var u5 = Ext.ModelManager.create(
	{
		username:'dream5',
		password:'123456'
	},
	"User1");
	var u6 = Ext.ModelManager.create(
	{
		username:'dream6',
		password:'123456'
	},
	"User2");
	alert(u5.get('username'));
	alert(u6.get('username'));
	alert(Ext.JSON.encode(u5));
	alert(Ext.JSON.encode(u5.data));
	
	
	function B(obj){
		this.a = obj.a;
		this.b = obj.b;
		this.me=obj.me;
		this.TO = {s:1,v:2}
	} 
	var b = new B({
		a:"hello",
		b:99,
		me:function(){
			var TO = this.TO;
			return TO.s;
		}
	})
	alert(b.me())
});