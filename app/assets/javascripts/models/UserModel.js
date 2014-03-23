define([
  'jquery',
  'underscorejs',
  'backbonejs'
], function($, _,  Backbone){
	var UserModel = Backbone.Model.extend({
		defaults: {
		    "name": "Unset",
		    "loggedIn":  false
		  },

        initialize: function() {
            _.bindAll(this, 'login');
            _.bindAll(this, 'get_user');
            _.bindAll(this, 'update_user');
            _.bindAll(this, 'logout_callback');
        },

        login: function(username, password, success, failure) {
            $.post("/login", {
                email: username,
                password: password
            }, this.update_user).success(success).fail(this.update_user).fail(failure);
        },

        logout: function(success, failure) {
            $.post("/logout", { }, this.logout_callback).success(success).fail(failure);
        },

        logout_callback: function() {

            this.set("loggedIn", false);
            this.trigger('change', this);
        },

        get_user: function() {
            $.get("/user", {  }, this.update_user).fail(this.update_user);
        },

        update_user: function(data, status) {
            if (status === "error" || data === "") {
                this.set("loggedIn", false);
            } else {
                this.set("loggedIn", true);
                this.set("name", data.name);
                this.set("email", data.email);
            }

            this.trigger('change', this);
        }

	 });
	 return UserModel;
});