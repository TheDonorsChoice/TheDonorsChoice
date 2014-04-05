define([
    'jquery',
    'underscorejs',
    'backbonejs'
], function($, _, Backbone){
    var ResetPassword1Model = Backbone.Model.extend({
        defaults: {
            email: ""
        },

        // Post the data to the /resetpassword route on the server where the email will be sent.
        submit: function(success, failure) {
            $.post('/resetpassword1', this.attributes).success(success).fail(failure);//-----------resetpassword------------how to change the contact part???????????
        }
    });

    // Return the model for the module
    return ResetPassword1Model;
});