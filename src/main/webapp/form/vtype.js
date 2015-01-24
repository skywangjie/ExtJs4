Ext.onReady(function(){
	Ext.QuickTips.init();//初始化提示;
	// custom Vtype for vtype:'IPAddress'
	Ext.apply(Ext.form.field.VTypes, {
   	 	IPAddress :function(v) 
   	 	{
        	return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v);
    	},
    	IPAddressText: 'Must be a numeric IP address',
    	IPAddressMask: /[\d\.]/i,
    	daterange: function(val, field) {
            var date = field.parseDate(val);
            if (!date) {
                return false;
            }
            if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            	console.log(field.up('form').down('#' + field.startDateField));
            	var start = field.up('form').down('#' + field.startDateField);
                start.setMaxValue(date);
                start.validate();
                this.dateRangeMax = date;
            }
            else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            	console.log(field.up('form').down('#' + field.endDateField));
            	var end = field.up('form').down('#' + field.endDateField);
                end.setMinValue(date);
                end.validate();
                this.dateRangeMin = date;
            }
            return true;
        },
        daterangeText: 'Start date must be less than end date',
        password: function(val, field) {
            if (field.initialPassField) {
                var pwd = field.up('form').down('#' + field.initialPassField);
                return (val == pwd.getValue());
            }
            return true;
        },
        passwordText: '密码不匹配'
	});
	Ext.create('Ext.form.Panel',{
		title:'vtype示例',
		width : 300,
		frame : true,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		defaultType: 'textfield',//设置表单字段的默认类型
		fieldDefaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 80,//标签宽度
			width : 240,//字段宽度
			msgTarget : 'side'
		},
		items:[
		{
			fieldLabel:'电子邮件',
			vtype:'email'
		},
		{
			fieldLabel:'网址',
			vtype:'url'
		},
		{
			fieldLabel:'字母',
			vtype:'alpha'
		},
		{
			fieldLabel:'字母和数字',
			vtype:'alphanum'
		},
		{
			fieldLabel:'IP地址',
			vtype:'IPAddress'
		},{
			xtype: 'datefield',
            fieldLabel: '开始日期',
            name: 'startdt',
            itemId: 'startdt',
            vtype: 'daterange',
            endDateField: 'enddt' // id of the end date field
        }, {
        	xtype: 'datefield',
            fieldLabel: '结束日期',
            name: 'enddt',
            itemId: 'enddt',
            vtype: 'daterange',
            startDateField: 'startdt' // id of the start date field
        },{
            fieldLabel: '密码',
            inputType: 'password',
            name: 'pass',
            itemId: 'pass',
            allowBlank: false,
            listeners: {
                validitychange: function(field){
                    field.next().validate();
                },
                blur: function(field){
                    field.next().validate();
                }
            }
        }, {
            fieldLabel: '确认密码',
            inputType: 'password',
            name: 'pass-cfrm',
            vtype: 'password',
            initialPassField: 'pass' // id of the initial password field
        }]
	});
});