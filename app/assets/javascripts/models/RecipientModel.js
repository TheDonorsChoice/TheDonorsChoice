define([
    'underscorejs',
    'backbonejs'
], function(_, Backbone){
    var RecipientModel = Backbone.Model.extend({
        defaults: {
            orgName: "",
            email: "",
            phoneNumber: "",
            address: "",
            title: "",
            category: "",
            description: "",
        }
    });

    // Return the model for the module
    return RecipientModel;
});