define([
    'underscorejs',
    'backbonejs',
    'models/RecipientModel'
], function(_, Backbone, RecipientModel){

    var RecipientCollection = Backbone.Collection.extend({
        model: RecipientModel,
        url: "/recipient.json"
    });
    
    return RecipientCollection;
});