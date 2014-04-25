define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController',
    'helpers/RoutingHelper'
], function($, _, Backbone, Templates, AlertController, Router){

    var view = Backbone.View.extend({
        template: Templates['user-account-template'],
        el: $('#main'),

        events: {
            "submit form": "register",
            "click #registration-submit": "register"
        },

        initialize: function(options) {
            _.bindAll(this, 'render');
            _.bindAll(this, 'register');

            this.options = options;
            this.render();
        },

        register: function(e) {
            e.preventDefault();

            // Validate that the password is present and matches.
            var password = $('#registration-password').val();
            var password_confirm = $('#registration-password-confirm').val();

            if (password !== password_confirm) {
                AlertController.show("Unable to register your account. Please check that the passwords match and try again.", "danger");
                return;
            }

            if (password.length == 0) {
                AlertController.show("Please enter a valid password and try again.", "danger");
                return;
            }

            var name = $('#registration-name').val();
            var email = $('#registration-email').val();
            var userType = $('#registration-account-type').val();

            this.model.set("name", name);
            this.model.set("email", email);
            this.model.set("password", password);
            this.model.set("userType", userType);

            var success = function() {
                AlertController.show("Your account has been registered.");
                Router.navigateToRoot();
            };

            var failure = function() {
                AlertController.show("Please enter a valid password and try again.", "danger");
            };

            this.model.register(success, failure);
        },

        render: function(context) {
            var html = this.template(context);
            this.$el.html(html);
        }
    });

    return view;
});