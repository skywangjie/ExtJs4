Ext.onReady(function(){
	Ext.define('CanSay', {
     say: function() {
        	alert("CanSay..............");
     	}
	});
	Ext.define('CanSing', {
     sing: function() {
         alert("CanSing..............")
     	}
	});
	/////////////////////////////////////////////////////////////////
	Ext.define('CoolPerson', {
     mixins: {
         canSay_: 'CanSay',
         canSing_: 'CanSing'
     	},
    tell: function() {
         alert("Ahem....");
         this.mixins.canSing_.sing.call(this);
         alert("[Playing guitar at the same time...]");
         this.say();
         this.sing();
     	}
	});
	var me = Ext.create("CoolPerson",{});
	me.tell(); 
	me.sing();
	me.say();
});