Ext.onReady(function(){
	Ext.QuickTips.init();
	var uploadForm = Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.File示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		frame : true,
		height:100,
		width:300,
		renderTo :Ext.getBody(),
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 50,//标签宽度
			width : 150,//字段宽度
			allowBlank : false,//是否允许为空
			labelAlign : 'left',//标签对齐方式
			msgTarget :'side'   //在字段的右边显示一个提示信息
		},
		items:[{
		       xtype: 'filefield',
		       name: 'file',
		       fieldLabel: '照片',
		       anchor: '100%',
		       buttonText: '选择照片...'
		   }],
		   buttons: [{
		       text: '上传文件',
		       handler: function() {
		           var form = uploadForm.getForm();
		           if(form.isValid()){
		               form.submit({
		                   url: '../../dream/upload.action',
		                   waitMsg: '正在上传照片文件请稍候...',
		                   success: function(fp, o) {
		                       Ext.Msg.alert('提示信息', '您的照片文件 "' + o.result.file + '"已经成功上传。');
		                   }
		               });
		           }
		       }
		   }]
	});
});