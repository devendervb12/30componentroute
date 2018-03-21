
sap.ui.core.UIComponent.extend("smax.batch30.A2.Component", {
	 
	// router
	metadata : {
		manifest : "json"
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		var oRouter = this.getRouter();
		oRouter.initialize();
	}
});