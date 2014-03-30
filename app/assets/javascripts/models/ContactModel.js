define([
    'jquery',
    'underscorejs',
    'backbonejs'
], function($, _, Backbone){
    var ContactModel = Backbone.Model.extend({
        defaults: {
            name: "",
            email: "",
            comment: ""
        },

        // Post the data to the /contact route on the server where the email will be sent.
        submit: function(success, failure) {
            $.post('/contact', this.attributes).success(success).fail(failure);
        }
    });

    // Return the model for the module
    return ContactModel;
});