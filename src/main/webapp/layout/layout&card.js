Ext.application({  
    name : 'HelloExt',  
    launch : function() {  
        var navigate = function(panel, direction) {  
            var layout = panel.getLayout();  
            layout[direction]();  
            Ext.getCmp('move-prev').setDisabled(!layout.getPrev());  
            Ext.getCmp('move-next').setDisabled(!layout.getNext());  
        };  
        Ext.create('Ext.panel.Panel', {  
            title : 'Card布局示例',  
            width : 300,  
            height : 202,  
            layout : 'card',  
            activeItem : 0,  
            x : 30,  
            y : 60,  
            bodyStyle : 'padding:15px',  
            defaults : {  
                border : false  
            },  
            bbar : [ {  
                id : 'move-prev',  
                text : 'Back',  
                handler : function(btn) {  
                    navigate(btn.up("panel"), "prev");  
                },  
                disabled : true  
            }, '->', {  
                id : 'move-next',  
                text : 'Next',  
                handler : function(btn) {  
                    navigate(btn.up("panel"), "next");  
                }  
            } ],  
            items : [ {  
                id : 'card-0',  
                html : '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'  
            }, {  
                id : 'card-1',  
                html : '<p>Step 2 of 3</p>'  
            }, {  
                id : 'card-2',  
                html : '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'  
            } ],  
            renderTo : Ext.getBody()  
        });  
    }  
});