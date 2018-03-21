sap.ui.controller("smax.batch30.A2.controller.ProductList", {

	
	
	onItemSelection : function(oEvent){
		
		var productId = oEvent.getSource().getTitle();
		this.getOwnerComponent().getRouter().navTo("details", { pid : productId});
	}

});