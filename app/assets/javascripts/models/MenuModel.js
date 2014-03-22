define([
    'underscorejs',
    'backbonejs'
], function(_, Backbone){
    var MenuModel = Backbone.Model.extend({
        defaults: {
            title: "",
            dropdown: [],
            id: "",
            link: "#"
        }
    });

    // Return the model for the module
    return MenuModel;
});