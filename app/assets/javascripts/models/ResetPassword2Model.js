define([
    'jquery',
    'underscorejs',
    'backbonejs'
], function($, _, Backbone){
    var ResetPassword2Model = Backbone.Model.extend({
        defaults: {
            newpassword1: "",
            newpassword2: ""

        },

        // Post the data to the /resetpassword2 route on the server where the email will be sent.
        update_pw: function(success, failure) {
            $.post('/resetpassword2', this.attributes).success(success).fail(failure);//-----------resetpassword------------how to change the contact part???????????
        }
    });

    // Return the model for the module
    return ResetPassword2Model;
});