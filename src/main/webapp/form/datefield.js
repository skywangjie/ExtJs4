Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.Date示例',
		frame : true,
		height:100,
		width:300,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		items:[{
			fieldLabel:'日期选择框',
			xtype : 'datefield',
			labelSeparator :'：',//分隔符
			msgTarget :'side',//在字段的右边显示一个提示信息
			autoFitErrors : false,//展示错误信息时是否自动调整字段组件宽度
			format:'Y年m月d日',//显示日期的格式
			maxValue :'12/31/2008',//允许选择的最大日期
			minValue :'01/01/2008',//允许选择的最小日期
			disabledDates : ['2008年03月12日'],//禁止选择2008年03月12日
			disabledDatesText :'禁止选择该日期',
			disabledDays : [0,6],//禁止选择星期日和星期六
			disabledDaysText : '禁止选择该日期',
			width : 250,
			value : '12/31/2008'
		}]
	});
});