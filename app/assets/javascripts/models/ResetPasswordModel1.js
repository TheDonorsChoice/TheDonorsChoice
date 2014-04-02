define([
    'jquery',
    'underscorejs',
    'backbonejs'
], function($, _, Backbone){
    var ResetPasswordModel1 = Backbone.Model.extend({
        defaults: {
            email: ""
        },

        // Post the data to the /contact route on the server where the email will be sent.
        submit: function(success, failure) {
            $.post('/contact', this.attributes).success(success).fail(failure);//-----------------------how to change the contact part???????????
        }
    });

    // Return the model for the module
    return ResetPasswordModel1;
});