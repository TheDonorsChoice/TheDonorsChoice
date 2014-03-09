define([
  'jquery',
  'underscore',
  'backbone',
  'controllers/userController'
], function($, _, Backbone, userController){

	var AppRouter = Backbone.Router.extend({
		routes: {
			"register": "register",
			"logout": "logout",
			"*actions": "show"
			}
		});

    // Create the App Router for the application
    var app_router = new AppRouter();


	var startRouter = function() {
		// Default route
		app_router.on('route:show', function(actions) {
			var body = new Body({ template_name: "#body-template" });
		});

		app_router.on('route:register', function(actions) {
			var body = new Body({ template_name: "#user-account-template" });
		});

		app_router.on('route:logout', function(actions) {
			// Some quick code just to demo the login/out sequence.
			var alert = new Alert({
				model: {
					message: "You have been logged-out."
				}
			});
			user.set("loggedIn", false);

			// Drop the user back to the home page.
			app_router.navigate('show', {trigger: true});
		});
/*
		_(app_router.routes).each(function(route, key) {
			app_router.on("route:"+key, function(actions) {
				console.log(actions);
			});
		});
*/


		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();
	}

  return {
	  initialize: startRouter
	  };
});