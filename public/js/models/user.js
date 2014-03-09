define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var UserModel = Backbone.Model.extend({
		defaults: {
		    "first_name": "Unset",
		    "last_name" : "Unset",
		    "loggedIn":  false
		  }

	    });
	 return UserModel;
});