define([
    'underscorejs',
    'backbonejs',
    'models/ResourceModel'
], function(_, Backbone, ResourceModel){
    var ResourceCollection = Backbone.Collection.extend({
        model: ResourceModel,
        url: "/resources.json"
    });
    // Return the Collection class to allow others to instantiate it.
    return ResourceCollection;
});