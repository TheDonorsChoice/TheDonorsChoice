define([
  'jquery',
  'models/UserModel',
  'views/UserView'
], function($, UserModel, UserView){
    var initialize = function() {
        var user = new UserModel();
        new UserView({ model: user });
    };

    var register = function() {

    };

    var logout = function() {

    };

	return {
        initialize: initialize,
		register: register,
		logout: logout
	}
});