define([
  'underscorejs',
  'router',
  'models/UserModel',
  'controllers/AlertController',
  'compiled-templates'
], function(_, app_router, UserModel, AlertController, Templates){

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
            "submit form": "login",
            "click #btn-login": "login",
            "click #btn-logout": "logout"
        },

        login: function(e) {
            e.preventDefault();

            var username = $('#login-username').val();
            var password = $('#login-password').val();

            this.model.login(username, password, function() {
                    // Hide the Login Dropdown and navigate to the default page.
                    $('#user-dropdown').removeClass('open');
                    app_router.navigate('show', {trigger: true});

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
                app_router.navigate('show', {trigger: true});
                $('#user-dropdown').removeClass('open');
                AlertController.show("You have been logged out successfully.");
            },
            function() {
                AlertController.show("An error was encountered attempting to log you out.", "danger");
            });
        },

        render: function() {

            var dropdown = $("#user-login-item");
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