define([
    'jquery',
    'backbonejs',
    'compiled-templates'
], function($, Backbone, Templates){
    var StaticView = Backbone.View.extend({
        el: $('#main'),
        page_id: '',
        initialize: function(options){
            this.page_id = options.page_id;
            _.bindAll(this, "render");
        },
        render: function(){
            var data = { };
            var html = Templates[this.page_id](data);
            this.$el.html( html );
        }
    });
    return StaticView;
});
