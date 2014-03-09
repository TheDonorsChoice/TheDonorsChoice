define([
  'jquery',
  'underscore',
  'backbone',
  'views/mainView',
], function($, _, Backbone, mainView){

return {
		show: function(){
			console.log("show");
			var buh = new mainView({ template_name: "#body-template" });
			}
	}

});