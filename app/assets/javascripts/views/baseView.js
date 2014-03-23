define([
  'jquery',
  'underscorejs',
  'backbonejs',
  'compiled-templates'
], function($, _, Backbone, Templates){

	var view = Backbone.View.extend({
        template: Templates[''],
		el: $('#main'),

		initialize: function(options) {
			_.bindAll(this, 'render');
			this.options = options;
			this.render();
		},

		render: function(context) {
			var $html = this.template(context);
			this.$el.html($html);
		}
	});

	return view;
});