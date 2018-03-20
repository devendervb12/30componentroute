sap.ui.controller("smax.batch30.A2.controller.ProductList", {

	gotoProdDtl : function(){
		// get Router
		this.getOwnerComponent().getRouter().navTo("details");
	}

});