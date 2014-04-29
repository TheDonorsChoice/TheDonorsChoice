define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController',
    'helpers/RoutingHelper'
], function ($, _, Backbone, Templates, AlertController, Router) {

    var view = Backbone.View.extend({
        template: Templates['user-account-template'],
        el: $('#main'),

        events: {
            "submit form": "register"
        },

        initialize: function (options) {
            _.bindAll(this, 'render');
            _.bindAll(this, 'register');

            this.options = options;
            this.render();
        },

        register: function (e) {
            e.preventDefault();

            // Validate that the password is present and matches.
            var password = $('#registration-password').val();
            var password_confirm = $('#registration-password-confirm').val();

            if (password !== password_confirm) {
                AlertController.show("Unable to register your account. Please check that the passwords match and try again.", "danger");
                return;
            }

            if (password.length == 0) {
                AlertController.show("Your password cannot be blank.", "danger");
                return;
            }

            if (password.length < 6) {
                AlertController.show("Your password must be at least 6 characters long.", "danger");
                return;
            }

            if (password.length > 13) {
                AlertController.show("Your password must be less than 13 characters long.", "danger");
                return;
            }

            var validPassword = validatePassword(password);
            if (!validPassword) {
                AlertController.show("Your password must contain at least one of the following: Lower Case, Upper Case, Symbol and Number.", "danger");
                return;
            }

            var name = $('#registration-name').val();
            if (name.length == 0) {
                AlertController.show("Your name cannot be blank. Please correct it and try again.", "danger");
                return;
            }

            var email = $('#registration-email').val();

            if (!validEmail(email)) {
                AlertController.show("The email address you entered is not valid. Please correct it and try again.", "danger");
                return;
            }
            var type = $('#registration-account-type').val();
            var address_street = $('#registration-address').val();
            var address_city = $('#registration-address-city').val();
            var address_zip = $('#registration-address-zip').val();
            var address_state = $('#registration-address-state').val();

            this.model.set("name", name);
            this.model.set("email", email);
            this.model.set("password", password);
            this.model.set("type", type);

            // Address fields
            this.model.set("address_street", address_street);
            this.model.set("address_city", address_city);
            this.model.set("address_zip", address_zip);
            this.model.set("address_state", address_state);

            var success = function () {
                AlertController.show("Your account has been registered.");
                Router.navigateToRoot();
            };

            var failure = function () {
                AlertController.show("Your account was unable to be registered due to an unknown error.", "danger");
            };

            this.model.register(success, failure);
        },

        render: function (context) {
            var html = this.template(context);
            this.$el.html(html);
        }
    });

    var validatePassword = function (password) {
        var hasSymbol = false;
        var hasNumber = false;
        var hasCapital = false;
        var hasLower = false;
        for (var i = 0; i < password.length; i++) {
            if (password[i] >= 'a' && password[i] <= 'z') {
                hasLower = true;
            }

            if (password[i] >= 'A' && password[i] <= 'Z') {
                hasCapital = true;
            }

            if (password[i] >= '0' && password[i] <= '9') {
                hasNumber = true;
            }

            //
            // Stupid ASCII has three different defined sets of symbols in different groups.
            //
            if (password[i] >= '!' && password[i] <= '@') {
                hasSymbol = true;
            }

            if (password[i] >= '[' && password[i] <= '`') {
                hasSymbol = true;
            }

            if (password[i] >= '{' && password[i] <= '~') {
                hasSymbol = true;
            }
        }

        return hasSymbol && hasNumber && hasCapital && hasLower;
    };

    var validEmail = function (email) {
        //
        // Email Validation from Stack Overflow
        // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        //
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    return view;
});