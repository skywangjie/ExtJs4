Ext.define("AM.controller.UserController",{
	extend:'Ext.app.Controller',
	init:function(){
		this.control({
			"userlist button[id=add]":{
				click:function(o){
					var grid = o.ownerCt.ownerCt;
					var st = grid.getStore();
					var edit = grid.editing;
					var model = st.model;
					var modelObj = {
						name : "",
						age : "",
						email: "",
						birthday: "",
						sex: ""
					};
					var userObj = new model(modelObj);
					edit.cancelEdit();
					st.insert(0, userObj);
					edit.startEditByPosition(
					{
						row : 0,
						column : 1
					});
					win.show();
				}
			},
			"userlist button[id=update]":{
				click:function(o){
					var grid = o.ownerCt.ownerCt;
					var st = grid.getStore();
					st.sync();//数据与后台同步
					var records = st.getUpdatedRecords();
					Ext.Array.each(records,function(model){
						model.commit();
					})
				}
			},
			"userlist button[id=selection]":{
				click:function(o){
					var grid = o.ownerCt.ownerCt;
					var sm = grid.getSelectionModel();
					alert(sm.isSelected(0))
				}
			},
			"userlist button[id=search]":{
				click:function(o){
					var text = Ext.getCmp('searchText').getValue();
					Ext.Ajax.request({
						url:"user!query.action",
						params:{keyText:text,start:0,limit:20},
						method:"POST",
						timeout:2000,
						success:function(response,opts)
						{
							alert(response.responseText);
						}
					});
				}
			},
			"userlist button[id=remove]":{
				click:function(o){
					var grid = o.ownerCt.ownerCt;
					var data = grid.getSelectionModel().getSelection();
					if(data.length==0){
						Ext.Msg.alert("提示","您最少要选择一条数据")
					}else{
						//先得到id数组
						var st = grid.getStore();
						var ids = [];
						Ext.Array.each(data,function(record){
							ids.push(record.get('name'));
						});
						var selectcount = data.length;
						Ext.Msg.confirm('确认删除', '你确定删除这<font color=red>'+selectcount+'</font>条记录?', function(btn)
						{
							if (btn == 'yes') 
							{
								//后台操作
								Ext.Ajax.request({
									url:"user!delete.action",
									params:{ids:ids.join(",")},
									method:"POST",
									timeout:2000,
									success:function(response,opts)
									{//前端删除
										Ext.Array.each(data,function(record)
										{
											st.remove(record);
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
							}
						});
					};
				}
			},
			"userlist actioncolumn[id=delete]":{
				click:function(o,item,rowIndex,colIndex,e){
					alert(rowIndex+"|"+colIndex);
				}
			}
			
		})
	},
	views:[
		'UserView'
	],
	stores:[
		'UserStore'
	],
	models:[
		'UserModel'
	]
});