Ext.application({  
    name : "HelloExt",  
    launch : function() {  
        Ext.create('Ext.panel.Panel', {  
            title : 'Column Layout - 按比例',  
            width : 350,  
            height : 250,  
            x : 20,  
            y : 100,  
            layout : 'column',  
            items : [ {  
                title : 'Column 1',  
                columnWidth : .25  
            }, {  
                title : 'Column 2',  
                columnWidth : .55  
            }, {  
                title : 'Column 3',  
                columnWidth : .20  
            } ],  
            renderTo : Ext.getBody()  
        });  
    }  
});