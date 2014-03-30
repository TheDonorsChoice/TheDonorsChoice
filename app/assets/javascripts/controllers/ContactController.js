define([
    'jquery',
    'backbonejs',
    'views/ContactView',
    'models/ContactModel'
], function($, Backbone, ContactView, ContactModel){

    return {
        show: function(){
            var model = new ContactModel();
            new ContactView({ model: model });
        }
    }
});