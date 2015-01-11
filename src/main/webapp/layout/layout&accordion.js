Ext.application({  
    name : "HelloExt",  
    launch : function() {  
        Ext.create('Ext.panel.Panel', {  
            title : 'Accordion Layout',  
            width : 300,  
            height : 300,  
            x : 20,  
            y : 20,  
            layout : 'accordion',  
            defaults : {  
                bodyStyle : 'padding:15px'  
            },  
            layoutConfig : {  
                titleCollapse : false,  
                animate : true,  
                activeOnTop : true  
            },  
            items : [ {  
                title : 'Panel 1',  
                html : 'Panel content!'  
            }, {  
                title : 'Panel 2',  
                html : 'Panel content!'  
            }, {  
                title : 'Panel 3',  
                html : 'Panel content!'  
            } ],  
            renderTo : Ext.getBody()  
        });  
    }  
});