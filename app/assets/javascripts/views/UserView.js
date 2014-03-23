define([
  'underscorejs',
  'router',
  'models/UserModel',
  'compiled-templates'
], function(_, app_router, UserModel, Templates){

	var view = Backbone.View.extend({
        el: $('#user-container'),
        template: Templates['user-login-template'],

        initialize: function() {
            _.bindAll(this, 'render');
            _.bindAll(this, 'login');

            this.listenTo(this.model, "change", this.render);

            // Try to get the user data to prime the UI
            this.model.get_user();
        },

        events: {
            "submit form": "login",
            "click #btn-login": "login",
            "click #btn-logout": "logout"
        },

        login: function(e) {
            e.preventDefault();

            // Hide the Login Dropdown.
            $('#user-dropdown').removeClass('open');
            app_router.navigate('show', {trigger: true});

            var username = $('#login-username').val();
            var password = $('#login-password').val();

            this.model.login(username, password);
        },

        logout: function() {

            // Hide the Login Dropdown.
            //app_router.navigate('show', {trigger: true});

            this.model.logout();
        },

        render: function() {

            var dropdownEl = $("#user-login-item");
            if (this.model.get("loggedIn")) {
                dropdownEl.html(this.model.get("name"));
            } else {
                dropdownEl.html("Login")
            }

            var html = this.template(this.model);
            this.$el.html(html);
        }
	});

	return view;
});