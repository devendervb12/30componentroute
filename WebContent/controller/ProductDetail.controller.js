sap.ui.controller("smax.batch30.A2.controller.ProductDetail", {

	onInit : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.getRoute("details").attachPatternMatched(function(oEvent){
			debugger;
			var prodId = oEvent.getParameters().arguments.pid;
		})
	},
	
	goBack : function(){
		this.getOwnerComponent().getRouter().navTo("homePage");
	}

});