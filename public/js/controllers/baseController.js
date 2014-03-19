define([
  'jquery',
  'underscore',
  'backbone',
  'views/baseView',
  'views/userView',
], function($, _, Backbone, baseView, userView){

return {
		show: function(){
			console.log("show");
			var buh = new baseView({});
			var buh2 = new userView(buh);
			}
	}

});