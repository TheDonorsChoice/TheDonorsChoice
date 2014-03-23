define([
    'jquery',
    'backbonejs',
    'views/StaticView'
], function($, Backbone, StaticView){

    return {
        show: function(pageId){
            var staticView = new StaticView({page_id: pageId});
            staticView.render();
        }
    }
});