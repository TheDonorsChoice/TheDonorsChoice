define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

	var view = Backbone.View.extend({
            el: $('#main'),

            initialize: function(options) {
                _.bindAll(this, 'render');
                this.options = options;
                this.render();
            },

            render: function() {
                //
                // Temporary code to allow us to put in temporary views until the full support for the User is complete.
                //
                var template_name = this.options.template_name;
                var template = Handlebars.compile($(template_name).html());
                var html = template();
                $(this.el).html(html);
            }
        });
        
        return view;
});