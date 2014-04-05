define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates'
], function($, _, Backbone, Templates){

    var view = Backbone.View.extend({
        template: Templates['recipient-template'],
        el: $('#main'),

        initialize: function() {
            _.bindAll(this, 'render');

            this.listenTo(this.collection, "change", this.render);

            this.collection.fetch({success: function(collection, response, options) {
                collection.trigger("change");
            }});
        },

        render: function() {
            var recipienthtml = this.template(this.collection);
            this.$el.html(recipienthtml);
        }
    });
    
    return view;
});