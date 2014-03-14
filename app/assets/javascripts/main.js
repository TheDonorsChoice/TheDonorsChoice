// Self-executing wrapper
(function($) {

    var AppRouter = Backbone.Router.extend({
    routes: {
        "register": "register",
        "logout": "logout",
        "*actions": "show"
        }
    });

    // Create the App Router for the application
    var app_router = new AppRouter();

    var Body = Backbone.View.extend({
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

    var Menu = Backbone.View.extend({
        el: $('#navbar-items'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {

            var template = Handlebars.compile($("#menu-template").html());
            var html = template(this.model);
            $(this.el).html(html);
        }
    });

    var Alert = Backbone.View.extend({
        el: $('#alert'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {
            var template = Handlebars.compile($("#alert-template").html());
            var html = template(this.model);
            $(this.el).html(html).fadeIn("fast").delay(3000).fadeOut("slow");
        }
    });

    var Header = Backbone.View.extend({
        el: $('#header'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {

            var template = Handlebars.compile($("#header-template").html());
            var html = template(this.model);
            $(this.el).html(html);
        }
    });

    var UserModel = Backbone.Model.extend({
        defaults: {
            "name": "Unset",
            "loggedIn":  false
          }
    });

    var UserView = Backbone.View.extend({
        el: $('#user-container'),

        initialize: function() {
            _.bindAll(this, 'render');
            _.bindAll(this, 'login');
            _.bindAll(this, 'get_user');

            this.render();
            this.listenTo(this.model, "change", this.render);

            // Try to get the user data to prime the UI
            this.get_user();
        },

        events: {
            "click #btn-login": "login",
            "click #btn-logout": "logout"
        },

        get_user: function()  {
            var model = this.model;
            $.get("/user", {  }, function(data) {
                // We received a non-error... It must have been a huge success.
                model.set("loggedIn", true);
                model.set("name", data.name);
                model.set("email", data.email);
            });
        },

        login: function() {

            // Hide the Login Dropdown.
            $('#user-dropdown').removeClass('open');
            app_router.navigate('show', {trigger: true});

            var username = $('#login-username').val();
            var password = $('#login-password').val();

            // Scope workaround, once the post completes "this" is inaccessible.
            var model = this.model;

            $.post("/login", {
                email: username,
                password: password
            }, function(data) {
                // We received a non-error... It must have been a huge success.
                model.set("loggedIn", true);
                model.set("name", data.name);

                var alert = new Alert({
                    model: {
                        message: "You have been logged-in successfully."
                    }
                });
            }).fail(function(data) {

                var alert = new Alert({
                    model: {
                        message: "Unable to log you in at this time. Are you sure your username/password are correct?",
                        attribute: "danger"
                    }
                });
            });
        },

        logout: function() {

            // Hide the Login Dropdown.
            app_router.navigate('show', {trigger: true});

            var alert = new Alert({
                model: {
                    message: "You have been logged-out."
                }
            });

            // Scope workaround, once the post completes "this" is inaccessible.
            var model = this.model;

            $.post("/logout", { }, function(data) {
                // We received a non-error... It must have been a huge success.
                model.set("loggedIn", false);
            });
        },

        render: function() {
            if (this.model.get("loggedIn")) {
                var template = Handlebars.compile($("#user-template").html());
                var html = template(this.model.attributes);
                $(this.el).html(html);
            } else {
                var template = Handlebars.compile($("#login-template").html());
                var html = template();
                $(this.el).html(html);
            }
        }
    });

    var UserDropdownView = Backbone.View.extend({
        el: $('#user-action'),
        initialize: function() {
                _.bindAll(this, 'render');

                this.render();
                this.listenTo(this.model, "change", this.render);
            },
        render: function() {
                var template = Handlebars.compile($("#user-dropdown-template").html());
                var text = { text: this.model.get("loggedIn") ? this.model.get("name") : "Login" };

                var html = template(text);
                $(this.el).html(html);
            }
    });

    // Initialize the Menu from the json file.
    $.getJSON("/assets/configs/menu.json", function(data) {
        var menu = new Menu({
            model: data
        });
    });

    var user = new UserModel();
        var userView = new UserView({
            model: user
     });

    // Default route
    app_router.on('route:show', function(actions) {
        var body = new Body({ template_name: "#body-template" });
    });

    app_router.on('route:register', function(actions) {
        var body = new Body({ template_name: "#user-account-template" });
    });

    var userDropdownView = new UserDropdownView({
        model: user
    });

    var header = new Header({
        model: {
            title: "TheDonorsChoice",
            slogan: "It’s The Donor's Choice on how, where and when you donate, let us help you... help us!"
        }
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
})(jQuery);
