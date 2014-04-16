define([
  'underscorejs',
  'helpers/RoutingHelper',
  'models/UserModel',
  'controllers/AlertController',
  'compiled-templates'
], function(_, Router, UserModel, AlertController, Templates){

	var view = Backbone.View.extend({
        el: $('#main'),
        template: Templates['user-login-template'],

        initialize: function() {
            _.bindAll(this, 'render');
            _.bindAll(this, 'buh');


            this.listenTo(this.model, "change", this.render);

            // Try to get the user data to prime the UI
            this.model.get_user();
        },

        events: {

        },

        removeDropdown: function() {
            $('#user-dropdown').removeClass('open');
        },

        buh: function(e) {

        },


        render: function() {

            debugger;

            var html = this.template(this.model);
            this.$el.html(html);
        }
	});

	return view;
});