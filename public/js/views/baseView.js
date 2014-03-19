define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/main_template'
], function($, _, Backbone, template){

	var view = Backbone.View.extend({
		el: $('#main'),

		initialize: function(options) {
			_.bindAll(this, 'render');
			this.options = options;
			this.render();
		},

		render: function(context) {
			var $html = template(context);
			this.$el.html($html);
		}
	});

	return view;
});