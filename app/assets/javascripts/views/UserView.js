define([
  'underscorejs',
  'helpers/RoutingHelper',
  'models/UserModel',
  'controllers/AlertController',
  'compiled-templates'
], function(_, Router, UserModel, AlertController, Templates){

	var view = Backbone.View.extend({
        el: $('#user-container'),
        template: Templates['user-login-template'],

        initialize: function() {
            _.bindAll(this, 'render');
            _.bindAll(this, 'login');

            this.listenTo(this.model, "change", this.render);

            // Try to get the user data to prime the UI
            this.model.get_user();
        },

        events: {
            "click #register": "removeDropdown",
            "submit form": "removeDropdown",
            "click #btn-login": "removeDropdown",

            "submit form": "login",
            "click #btn-login": "login",
            "click #btn-logout": "logout"
        },

        removeDropdown: function() {
            $('#user-dropdown').removeClass('open');
        },

        login: function(e) {
            e.preventDefault();

            var username = $('#login-username').val();
            var password = $('#login-password').val();

            this.model.login(username, password, function() {
                    // The user successfully logged in, route them to the default page.
                    Router.navigateToRoot();
                    AlertController.show("You have been logged in successfully.");
                },
                function() {
                    AlertController.show("You were unable to be logged in. Please check your username/password.", "danger");
                }
            );
        },

        logout: function() {

            this.model.logout(function() {
                // Hide the Login Dropdown and navigate to the default page.
                Router.navigateToRoot();
                $('#user-dropdown').removeClass('open');
                AlertController.show("You have been logged out successfully.");
            },
            function() {
                AlertController.show("An error was encountered attempting to log you out.", "danger");
            });
        },

        render: function() {

            var dropdown = $(   "#user-login-item");
            if (this.model.get("loggedIn")) {
                dropdown.html(this.model.get("name"));
            } else {
                dropdown.html("Login")
            }

            var html = this.template(this.model);
            this.$el.html(html);
        }
	});

	return view;
});