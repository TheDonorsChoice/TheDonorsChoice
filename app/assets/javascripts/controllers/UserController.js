define([
  'jquery',
  'models/UserModel',
  'views/UserView',
  'views/UserSettingsView',
  'views/RegistrationView'
], function($, UserModel, UserView, UserSettingsView, RegistrationView){
    var user = new UserModel();

    var initialize = function() {
        new UserView({ model: user });
    };

    var register = function() {
        new RegistrationView({ model: user });
    };

    var settings = function() {
        new UserSettingsView({ model: user });
    };

    var logout = function() {

    };

	return {
        initialize: initialize,
		register: register,
        settings: settings,
		logout: logout
	}
});