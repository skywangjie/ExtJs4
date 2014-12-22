Ext.onReady(function(){
	//定义默认的验证提示信息
	Ext.data.validations.presenceMessage = '必须是有效值。';
	Ext.data.validations.lengthMessage = '长度错误。';
	Ext.data.validations.formatMessage = '格式错误。';
	Ext.data.validations.inclusionMessage = '没有包括在可接受的数据中。';
	Ext.data.validations.exclusionMessage = '不是可接受的值。';
		
	//自定义数值范围验证
	Ext.apply(Ext.data.validations,{
		number : function(config, value){
			if (value === undefined){
		           return false;
		    }
	        var min    = config.min;
	        var max    = config.max;
	        
		    if ((min && value < min) || (max && value > max)){
		    		this.numberMessage = this.numberMessage+"它应该在["+min+"-"+max+"]";
		           return false;
		    } else{
		           return true;
		    }
		},
		numberMessage : '数值范围错误。'
	});
		
	//注册用户数据模型User
	Ext.regModel('User', {
		   fields: [//定义模型字段
	          {name: 'name',     type: 'string'},
	          {name: 'age',      type: 'int'},
	          {name: 'phone',    type: 'string'},
	          {name: 'gender',   type: 'string'},
	          {name: 'username', type: 'string'},
	          {name: 'alive',    type: 'boolean', defaultValue: true}
		  ],
		   validations: [
		      {type: 'presence',  field: 'age'},
		      {type: 'number',  field: 'age', min : 30,max:80},
		      {type: 'length',    field: 'name', min: 2},
		      {type: 'inclusion', field: 'gender',   list: ['男', '女']},
		      {type: 'exclusion', field: 'username', list: ['admin@xx.xx', 'user@xx.xx']},
		      {type: 'format',    field: 'username',  matcher: /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,4}$/}
		   ]
	});
	//创建User模型的实体对象
	var user = Ext.ModelMgr.create({
		  name : 'tom',
		  age  : 24,
		  gender : 'man',
		  username: 'abc'
	}, 'User');
	//执行数据验证
	var errors = user.validate();
	//获取验证信息
	var message = [];
	errors.each(function(v){
		message.push(v.field+' : '+v.message)
	});
	alert(message.join('\n'));
});