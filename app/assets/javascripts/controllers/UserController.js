define([
  'jquery',
  'models/UserModel',
  'views/UserView',
  'views/RegistrationView'
], function($, UserModel, UserView, RegistrationView){
    var user = new UserModel();

    var initialize = function() {
        new UserView({ model: user });
    };

    var register = function() {
        new RegistrationView({ model: user });
    };

    var logout = function() {

    };

	return {
        initialize: initialize,
		register: register,
		logout: logout
	}
});