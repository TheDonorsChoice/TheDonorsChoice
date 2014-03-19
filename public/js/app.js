define([
  'jquery',
  'underscore',
  'backbone',
  'hbs',
  'controllers/baseController',
  'controllers/userController'
], function($, _, Backbone, hbs, baseController, userController){

	var AppRouter = Backbone.Router.extend({
		routes: {
			"register": userController.register,
			"logout": userController.logout,
			"*actions": baseController.show
			}
		});

    // Create the App Router for the application

    var app_router = new AppRouter();


	var startRouter = function() {

		_(app_router.routes).each(function(route, key) {
			app_router.on("route:"+key, function(actions) {
				console.log(actions);
			});
		});

		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();
	}

  return {
	  initialize: startRouter
	  };
});