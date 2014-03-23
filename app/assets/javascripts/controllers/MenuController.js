define([
    'jquery',
    'backbonejs',
    'collections/MenuCollection',
    'views/MenuView'
], function($, Backbone, MenuCollection, MenuView){

    var show = function() {
        new MenuView();
    };

    return { show: show }
});