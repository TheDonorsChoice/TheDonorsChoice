define([
    'underscorejs',
    'backbonejs',
    'models/MenuModel'
], function(_, Backbone, MenuModel){
    var MenuCollection = Backbone.Collection.extend({
        model: MenuModel,
        url: "/assets/configs/menu.json"
    });
    // You don't usually return a collection instantiated
    return MenuCollection;
});