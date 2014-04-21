define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController'
], function($, _, Backbone, Templates, AlertController){

    var view = Backbone.View.extend({
        template: Templates['resetpassword1-template'],
        el: $('#main'),

        events: {
            "submit form": "submit",
            "click #resetpassword-submit": "submit"// where is it, yet to find=================================
        },

        initialize: function(options) {
            _.bindAll(this, 'render');
            this.options = options;
            this.render();
        },

        submit: function(e) {
            e.preventDefault();

            // Use the model setters and update the values from the UI
            //this.model.set("name", $('input#contact-name').val());
            this.model.set("email-resetpw", $('input#resetpassword-email').val());//==================================
            //this.model.set("comment", $('input#contact-comment').val());

            //
            // Success/Error handlers which will allow us to perform UI updates.
            //
            var success = function() {
                AlertController.show("The link to reset password has been sent successfully", "info");
            };

            var error = function() {
                AlertController.show("The user can not be found with this email address ", "danger");
            };

            // Request that the model submit the contact information to the server.
            this.model.submit(success, error);
        },

        render: function(context) {
            var $html = this.template(context);
            this.$el.html($html);
        }
    });

    return view;
});