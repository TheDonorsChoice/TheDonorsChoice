define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController'
], function($, _, Backbone, Templates, AlertController){

    var view = Backbone.View.extend({
        template: Templates['resetpassword2-template'],
        el: $('#main'),

        events: {
            "submit form": "submit",
            "click #newpassword-update": "update_pw"// where is it, yet to find=================================
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
            var newpassword1 = $('#newpassword1').val();
            var newpassword2 = $('#newpassword1').val();

            if(newpassword1!==newpassword2){
                AlertController.show("Unable to reset your password. Please check that the passwords match and try again.", "danger");
                return;
            }
            if(newpassword1.length==0){
                AlertController.show("Please enter a valid password and try again.", "danger")
                return;
            }

            this.model.set("newpassword1", newpassword1);//==================================

            // Success/Error handlers which will allow us to perform UI updates.

            var success = function() {
                AlertController.show("New password has been set for you successfully", "info");
                Router.navigateToRoot();
            };

            var error = function() {
                AlertController.show("Comfirmed password is not the same with New password ", "danger");
                
            };

            // Request that the model submit the contact information to the server.
            this.model.update(success, error);
        },

        render: function(context) {
            var $html = this.template(context);
            this.$el.html($html);
        }
    });

    return view;
});