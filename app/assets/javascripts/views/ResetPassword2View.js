define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController',
    'helpers/RoutingHelper'
], function($, _, Backbone, Templates, AlertController, Router){

    var view = Backbone.View.extend({
        template: Templates['resetpassword2-template'],
        el: $('#main'),

        events: {
            "submit form": "submit",
            "click #reset-submit": "update_pw"
        },

        initialize: function(options) {
            _.bindAll(this, 'render');
            this.options = options;
            this.render();
        },

        update_pw: function(e) {
            e.preventDefault();

            // Use the model setters and update the values from the UI
            //this.model.set("name", $('input#contact-name').val());

            
            // Validate that the password is present and matches.
            var password = $('#reset-password').val();
            var passwordConfirm = $('#reset-password-confirm').val();

            if(password !== passwordConfirm){
                AlertController.show("Unable to reset your password. Please check that the passwords match and try again.", "danger");
                return;
            }
            if(password.length == 0){
                AlertController.show("Please enter a valid password and try again.", "danger")
                return;
            }

            this.model.set("password", password);
            this.model.set("password_confirm", passwordConfirm);

            // Success/Error handlers which will allow us to perform UI updates.
            var success = function() {
                AlertController.show("New password has been set for you successfully", "info");
                Router.navigateToRoot();
            };

            var error = function() {
                AlertController.show("Your password was not updated successfully. Please try again.", "danger");
            };

            // Request that the model submit the contact information to the server.
            this.model.updatePassword(success, error);
        },

        render: function(context) {
            var $html = this.template(context);
            this.$el.html($html);
        }
    });

    return view;
});