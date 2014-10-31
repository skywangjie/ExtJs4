Ext.onReady(function(){
	obj = {count:3};
	
	document.onmouseover = function(e)
	{
		var ev = e||window.event;
		var cx = ev.clientX;
		var cy = ev.clientY;
		document.getElementById('area').innerHTML = "坐标:"+cx+","+cy;
	}
	if(Ext.isIE)
	{
		var button2 = document.getElementById('btn2');
		button2.attachEvent('onclick',function(){
			alert('I am button2');
		});//该方法适用于IE浏览器
		button2.onclick = function(){
			alert('I am button2');
		}
	}
	else
	{
		var button2 = document.getElementById('btn2');
		button2.addEventListener('click',function(){
			alert('I am button2');
		});//该方法适用于firefox浏览器
		button2.onclick = function(){
			alert('I am button2');
		}
	}
	
	var button3 = Ext.get('btn3');
	button3.on('click',function(){//addListener
		alert('I am button3');
	});//ExtJS方式的事件绑定 绑定事件处理函数
	
	
	Ext.define("Child",{
		extend:"Ext.util.Observable",
		constructor : function()
		{
			this.say = function()//增加新方法
			{
				this.fireEvent("hungry",this)//触发2
				this.fireEvent("eat",obj,this)//触发2 参数由这里确定
			}
			this.addEvents({"hungry":true,"eat":true});//注册1
			/*this.addListener("hungry",function(){//监听3
				alert("我饿了");
			});
			this.addListener("eat",function(obj){//监听3
				alert("吃的很开心"+obj.count+"碗饭");
			});*/
		},
		feel:"好饱"
	});
	
	Ext.define("Mother",{
		extend:"Ext.util.Observable",
		constructor : function(config)
		{
			this.listeners = config.listeners;
			Mother.superclass.constructor.call(this, config);
		}
	});
	
	var child = new Child();
	child.on("hungry",function(){
		alert("我饿了");
	});
	child.on("eat",function(obj,child){
		alert("吃的很开心"+obj.count+"碗饭");
		alert(child.feel);
	});
	
	var mother = new Mother({});
	mother.relayEvents(child, ['hungry','eat']);
	mother.on("hungry",function(){
		alert("给孩子一瓶奶");
	});
	mother.on("eat",function(){
		alert("吃吧吃吧，吃货");
	});
	
	var button4 = Ext.get('btn4');
	button4.on('click',function(){
		child.say();
	});
	
	Array.prototype.indexOf = function(el){
        for (var i=0,n=this.length; i<n; i++){
                if (this[i] === el){
                        return i;
                }
        }
        return -1;
	}
	//-----------------------自定义-------------------------
	var Observable = function(){
		this.events = ["start","stop"];
		this.listeners = {};
	}
	//2添加新的自定义事件类型
	Observable.prototype.addEvents = function(eventname)
	{
		this.event.push(eventname);
	}
	//3为自己的事件类型绑定响应的函数（添加事件监听）
	Observable.prototype.addListener = function(eventname,fn)
	{
		if(this.events.indexOf(eventname)==-1)
		{
			this.addEvents(eventname);
		}
		var arr = this.listeners[eventname];
		if(!arr)
		{
			arr = [fn];
		}
		else
		{
			if(arr.indexOf(fn)==-1)
			{
				arr.push(fn);
			}
		}
		//重新维护下事件类型和所房顶的函数数组的关联关系
		this.listeners[eventname] = arr;
	}
	//4移除事件监听
	Observable.prototype.removeListener = function(eventname,fn)
	{
		if(this.events.indexOf(eventname)==-1)
		{
			return;
		}
		var arr = this.listeners[eventname];
		if(!arr)
		{
			return;
		}
		if(arr.indexOf(fn)!=-1)
		{
			arr.splice(arr.indexOf(fn),1);
		}
	}
	//5如何让事件触发，就是调用这个事件类型所对应的所有函数执行即可
	Observable.prototype.fireEvent = function (eventname)
	{
		//如果当前没有传递事件类型名称或者当前传递的事件类型u存在我的对象里直接返回
		if(!eventname || (this.events.indexOf(eventname)==-1))
		{
			return;
		}
		var arr = this.listeners[eventname];
		if(!arr)
		{
			return;
		}
		for(var i=0;i< arr.length;i++)
		{
			var fn = arr[i];
			fn.call(fn,this);
		}
	}
	Observable.prototype.on = Observable.prototype.addListener;
	Observable.prototype.un = Observable.prototype.removeListener;
	Observable.prototype.fr = Observable.prototype.fireEvent;
	var ob = new Observable();
	ob.on("start",function(){
		alert("fn1........");
	});
	ob.on("stop",function(){
		alert("fn2........");
	});
	ob.fr("start");
	ob.fr("stop");
});