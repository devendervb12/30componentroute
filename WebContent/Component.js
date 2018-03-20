
sap.ui.core.UIComponent.extend("smax.batch30.A2.Component", {
	 
	// router
	metadata : {
		rootView : "smax.batch30.A2.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router"
			},
			routes : [
				{
			      pattern : "",
			      name : "homePage",
			      viewName : "smax.batch30.A2.view.ProductList",
			      viewType : "XML",
			      controlId : "idApp",
			      controlAggregation : "pages"
		     	},
		     	{
		     		pattern : "toDetail",
		     		name : "details",
		     		viewName : "smax.batch30.A2.view.ProductDetail",
		     		viewType :"XML",
		     		controlId : "idApp",
		     		controlAggregation : "pages"
		     	}
				]
		}
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		var oRouter = this.getRouter();
		oRouter.initialize();
	}
});