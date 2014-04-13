define([
    'underscorejs',
    'backbonejs'
], function(_, Backbone){
    var ResourceModel = Backbone.Model.extend({
        defaults: {
            orgName: "",
            address: "",
            phoneNumber: "",
            email: "",
            Type: "",
            itemsNeeded: ""
        }
    });

    // Return the model for the module
    return ResourceModel;
});