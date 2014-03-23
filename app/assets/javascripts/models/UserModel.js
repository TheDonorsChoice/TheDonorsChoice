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

        login: function(username, password) {
            $.post("/login", {
                email: username,
                password: password
            }, this.update_user).fail(this.update_user);
        },

        logout: function() {
            $.post("/logout", { }, this.logout_callback);
        },

        logout_callback: function() {
            this.set("loggedIn", false);
            this.trigger('change', this);
        },

        get_user: function() {
            $.get("/user", {  }, this.update_user).fail(this.update_user);
        },

        update_user: function(data, status) {
            if (status === "error") {

            } else {
                this.set("loggedIn", data !== "");

                if (this.get("loggedIn")) {
                    this.set("name", data.name);
                    this.set("email", data.email);
                }
            }

            this.trigger('change', this);
        }

	    });
	 return UserModel;
});