define([
  'jquery',
  'underscorejs',
  'backbonejs'
], function($, _,  Backbone){
	var UserModel = Backbone.Model.extend({
		defaults: {
		    "name": "Unset",
            "email": "",
            "password": "",
            "password_confirm": "",
		    "loggedIn":  false,
            "resetCode": "",
		    "type": "",
            "address-street": "",
            "address-zip": "",
            "address-city": "",
            "address-state": ""
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

        register: function(success, failure) {
            $.post("/user", {
                name: this.get("name"),
                email: this.get("email"),
                password: this.get("password"),
                type: this.get("type"),
                address_street: this.get("address-street"),
                address_zip: this.get("address-zip"),
                address_city: this.get("address-city"),
                address_state: this.get("address-state")
            }).success(success).fail(failure);
        },

        updatePassword: function(success, failure) {
            $.post("/updatepassword", {
                password: this.get("password"),
                resetCode: this.get("resetCode")
            }).success(success).fail(failure);
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
                this.set("type", data.type);
            }

            this.trigger('change', this);
        }

	 });
	 return UserModel;
});