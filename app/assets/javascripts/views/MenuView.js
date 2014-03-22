define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'models/MenuModel',
    'collections/MenuCollection',
    'compiled-templates'
], function($, _, Backbone, MenuModel, MenuCollection, Templates){

    var view = Backbone.View.extend({
        template: Templates['menu-template'],
        el: $('#navbar-items'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.collection = new MenuCollection();
            this.listenTo(this.collection, "change", this.render);

            this.collection.fetch({success: function(collection, response, options) {
                _(response).each(function(resp) {
                    collection.add(resp);
                });
                collection.trigger("change");
            }});
        },

        render: function() {
            var html = this.template(this.collection);
            this.$el.html(html);
        }
    });

    return view;
});