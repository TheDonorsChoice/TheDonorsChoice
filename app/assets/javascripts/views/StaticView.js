define([
    'jquery',
    'backbonejs',
    'compiled-templates',
    'compiled-partials'
], function($, Backbone, Templates, Partials){
    var StaticView = Backbone.View.extend({
        el: $('#main'),
        page_id: '',
        initialize: function(options){
            this.page_id = options.page_id;
            _.bindAll(this, "render");
        },
        render: function() {
            // Only attempt to render the page if a template exists.
            if (Templates[this.page_id] !== undefined) {
                //
                // Static page renderer designed for use for pages like the FAQ, About and Coming Soon pages.
                //
                var html = Templates[this.page_id]();
                this.$el.html( html );
            }
        }
    });
    return StaticView;
});
