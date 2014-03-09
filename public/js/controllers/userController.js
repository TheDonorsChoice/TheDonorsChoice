define([
  'jquery',
  'underscore',
  'models/user',
  'views/userView'
], function($, _, userModel, userView){


	return {
		register: function(){
			var user = new userModel();
			new userView(user);
		},

		logout: function(){
		}
	}
});