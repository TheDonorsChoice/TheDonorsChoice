define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController'
], function($, _, Backbone, Templates, AlertController){

    var view = Backbone.View.extend({
        template: Templates['contact-template'],
        el: $('#main'),

        events: {
            "submit form": "submit",
            "click #contact-submit": "submit"
        },

        initialize: function(options) {
            _.bindAll(this, 'render');
            this.options = options;
            this.render();
        },

        submit: function(e) {
            e.preventDefault();

            // Use the model setters and update the values from the UI
            this.model.set("name", $('input#contact-name').val());
            this.model.set("email", $('input#contact-email').val());
            this.model.set("comment", $('textarea#contact-comment').val());

            //
            // Success/Error handlers which will allow us to perform UI updates.
            //
            var success = function() {
                AlertController.show("Your message has been sent successfully", "info");
            };

            var error = function() {
                AlertController.show("Your message could not be sent", "danger");
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