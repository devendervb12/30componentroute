sap.ui.controller("smax.batch30.A2.controller.ProductDetail", {

	onInit : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.getRoute("details").attachPatternMatched(function(oEvent){
			debugger;
			var prodId = oEvent.getParameters().arguments.pid;
			//this.getView().bindElement("/ProductSet('HT-1000')"); // all product HT-1000 will reach the view
			this.getView().bindElement("/ProductSet('"+prodId+"')"); // all product HT-1000 will reach the view
//			this -> to controller
		//	this -> Router
		}, this);
		// we are specifying that this is a event listener
	}
});