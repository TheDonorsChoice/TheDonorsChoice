define([
    'underscorejs',
    'backbonejs',
    'models/MenuModel'
], function(_, Backbone, MenuModel){
    var MenuCollection = Backbone.Collection.extend({
        model: MenuModel,
        url: "/assets/configs/menu.json"
    });
    // Return the Collection class to allow others to instantiate it.
    return MenuCollection;
});