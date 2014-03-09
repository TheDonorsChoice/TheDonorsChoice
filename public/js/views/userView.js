define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var UserView = Backbone.View.extend({
		el: $('#user-container'),
		template_name: "#user-account-template",

		initialize: function() {
		    _.bindAll(this, 'render');
		    _.bindAll(this, 'login');

		    this.render();
		    this.listenTo(this.model, "change", this.render);
		},

		events: {
		    "click #btn-login": "login"
		},

		login: function() {

		    // Hide the Login Dropdown.
		    $('#user-dropdown').removeClass('open');
		    app_router.navigate('show', {trigger: true});

		    var username = $('#login-username').val();
		    var password = $('#login-password').val();

		    // Scope workaround, once the post completes "this" is inaccessible.
		    var model = this.model;

		    $.post("login", {
			username: username,
			password: password
		    }, function(data) {
			// We received a non-error... It must have been a huge success.
			model.set("loggedIn", true);

			model.set("first_name", data.first_name);
			model.set("last_name", data.last_name);

			var alert = new Alert({
			    model: {
				message: "You have been logged-in successfully."
			    }
			});
		    }).fail(function(data) {

			var alert = new Alert({
			    model: {
				message: "Unable to log you in at this time. Are you sure your username/password are correct?",
				attribute: "danger"
			    }
			});

		    });
		},

		render: function() {
		    if (this.model.get("loggedIn")) {
			var template = Handlebars.compile($("#user-template").html());
			var html = template(this.model.attributes);
			$(this.el).html(html);
		    } else {
			var template = Handlebars.compile($("#login-template").html());
			var html = template();
			$(this.el).html(html);
		    }
		}
	    });

	return function(user) {
		return new UserView({
        	    		model: user
        });
	};
});