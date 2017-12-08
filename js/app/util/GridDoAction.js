Ext.define("AM.util.GridDoAction",{

	/**
	 * 属性维护表格的插入
	 * @param {} grid
	 * @param {} modelObj
	 * @param {} treeObj
	 */
	doInsert:function(grid,modelObj,treeObj)
	{
		if(!(grid && modelObj))
		{
			alert("参数传递不正确");
			return ;
		}
		//得到表格数据集合
		var store = grid.getStore();
		//得到目前表格的数据集合长度
		var storeCount = store.getCount();
		//得到编辑插件
		var edit = grid.editing;
		//得到数据模型
		var model = store.model;
		
		var checkedRecord = grid.getSelectionModel().getSelection();
		if(checkedRecord.length == 0)
		{
			var parentRecord = checkedRecord[0];
			modelObj['nodeType'] = 'CENERAL';
			edit.cancelEdit();
			var deptObj = new model(modelObj);
			store.insert(0,deptObj);
			edit.startEditByPosition(
			{
				row : 0,
				column : 1
			});
			if(treeObj)
			{
				var rootNode = treeObj.getStore().getRootNode();
				rootNode.appendChild({
				id:modelObj["id"],
				text:modelObj["text"],
				leaf:modelObj["leaf"],
				checked:modelObj["checked"]
				});
			}
		}
		else if(checkedRecord.length == 1)
		{
			var parentRecord = checkedRecord[0];
			alert(parentRecord.get('id'));
			modelObj['nodeType'] = 'CENERAL';
			edit.cancelEdit();
			var deptObj = new model(modelObj);
			store.insert(0,deptObj);
			edit.startEditByPosition(
			{
				row : 0,
				column : 1
			});
			if(treeObj)
			{
				var parentNode = treeObj.getStore().getNodeById(parentRecord.get('id'));
				parentNode.data['leaf'] = false;
				parentNode.updateInfo();
				parentNode.appendChild({
				id:modelObj["id"],
				text:modelObj["text"],
				leaf:modelObj["leaf"],
				checked:modelObj["checked"]
				});
				parentNode.expand();
			}
		}
		else
		{
			alert('操作不正确，您可以选择一个部门建立分部门，也可以不勾选任何建立一个父级部门');
		}
		
	},
	doSave:function(grid,treeObj)
	{
		if(!grid)
		{
			alert('参数传递不正确')
		}
		//得到数据集合
		var store = grid.getStore();
		//records被你修改的数据
		var records = store.getUpdatedRecords();
		var phantoms=store.getNewRecords( ) ;//获得幻影行  
        records=records.concat(phantoms);//将幻影数据与真实数据合并  
		var data = [];
		Ext.Array.each(records,function(model){
			data.push(Ext.JSON.encode(model.data));
		});
		alert(data.join(","));
		//异步的操作数据
		if(data.length>0)
		{
			Ext.Ajax.request({
				url:store.getProxy().api['update'],
				params:{data:"["+data.join((",")+"]")},
				timeout:2000,
				success:function(response,option)
				{
					console.log(response.responseText);
					Ext.Array.each(records,function(model){
						var node = treeObj.getStore().getNodeById(model.get('id'));
						node.data['text'] = model.get('text');
						node.updateInfo();
						model.commit();
					})
				}
			});
		}
	},
	doDelete:function(grid,treeObj)
	{
		if(!grid)
		{
			alert('参数传递不正确')
		}
		var data = grid.getSelectionModel().getSelection();
		if(data.length==0){
			Ext.Msg.alert("提示","您最少要选择一条数据")
		}else{
			//先得到id数组
			var st = grid.getStore();
			var ids = [];
			Ext.Array.each(data,function(record){
				ids.push(record.get('id'));
			});
			var selectcount = data.length;
			Ext.Msg.confirm('确认删除', '你确定删除这<font color=red>'+selectcount+'</font>条记录', function(btn)
			{
				if (btn == 'yes') 
				{
					//后台操作
					Ext.Ajax.request({
//						url:"user!delete.action",
						url:st.getProxy().api['remove'],
						params:{ids:ids.join(",")},
						method:"POST",
						timeout:2000,
						success:function(response,opts)
						{//前端删除
							Ext.Array.each(data,function(record)
							{
								//表格数据删除
								st.remove(record);
								//tree数据删除
								var node = treeObj.getStore().getNodeById(record.get('id'));
								var parentNode = node.parentNode;
								node.remove(true);
								if(parentNode)
								{
									if(!parentNode.getChildAt(0))
									{
										parentNode.data['leaf'] = true;
										parentNode.updateInfo();
									}
								}
							})
						},
						failure:function()
						{
							Ext.Msg.show({
							title : '错误提示',
							msg : '删除时发生错误!',
							buttons : Ext.Msg.OK,
							icon : Ext.Msg.ERROR
							})
						}
					});
				};
			});
		};
		
	}
	
});