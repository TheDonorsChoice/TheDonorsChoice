define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates'
], function($, _, Backbone, Templates){

    var view = Backbone.View.extend({
        template: Templates['alert-template'],
        el: $('#alert'),

        initialize: function(options) {
            _.bindAll(this, 'render');
            this.options = options;
            this.render();
        },

        render: function() {
            var html = this.template(this.model);
            this.$el.html(html).fadeIn("fast").delay(3000).fadeOut("slow");
        }
    });

    return view;
});