define([
  'jquery',
  'models/UserModel',
  'views/UserView'
], function($, UserModel, UserView){

	return {
		register: function(){
			var user = new UserModel();
			new UserView(user);
		},

		logout: function(){

		}
	}
});