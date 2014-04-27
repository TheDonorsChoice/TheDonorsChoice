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
            "click #resetpassword-submit": "submit"
        },

        initialize: function(options) {
            _.bindAll(this, 'render');
            this.options = options;
            this.render();
        },

        submit: function(e) {
            e.preventDefault();

            // Use the model setters and update the values from the UI
            this.model.set("email", $('input#resetpassword-email').val());

            //
            // Success/Error handlers which will allow us to perform UI updates.
            //
            var success = function() {
                AlertController.show("The link to reset password has been sent to your email.", "info");
            };

            var error = function() {
                AlertController.show("The password reset request was unable to be generated.", "danger");
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