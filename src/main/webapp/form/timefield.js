Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.Time示例',
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		frame : true,
		height:100,
		width:300,
		items:[{
			fieldLabel:'时间选择框',
			xtype : 'timefield',
			width : 300,
			labelSeparator :'：',//分隔符
			msgTarget :'side',//在字段的右边显示一个提示信息
			autoFitErrors : false,//展示错误信息时是否自动调整字段组件宽度
			maxValue : '18:00',//最大时间
			maxText : '时间应小于{0}',//大于最大时间的提示信息
			minValue : '10:00',//最小时间
			minText : '时间应大于{0}',//小于最小时间的提示信息
			pickerMaxHeight : 150,//下拉列表的最大高度
			increment : 60,//时间间隔为60分钟
			format : 'G时i分s秒 ',//G标示为24时计时法
			invalidText :'时间格式无效'
		}]
	});
});