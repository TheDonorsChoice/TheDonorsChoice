// Self-executing wrapper
(function($) {

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
        loggedIn: true,
        login: function(login) {
            this.set({
                loggedIn: login
            });
        }
    });

    var UserView = Backbone.View.extend({
        el: $('#user-container'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();

            this.model.on("change", function() {
                if (this.model.hasChanged("loggedIn")) {
                    this.render();
                }
            })
        },

        events: {
            "click #btn-login": "login"
        },

        login: function() {

            // Hide the Login Dropdown.
            $('#user-dropdown').removeClass('open');

            var username = $('#login-username').val();
            var password = $('#login-password').val();

            $.post("login", {
                username: username,
                password: password
            }, function(data) {
                // We received a non-error... It must have been a huge success.
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

        render: function() {
            if (this.model.get("loggedIn")) {

            } else {
                var template = Handlebars.compile($("#login-template").html());
                var html = template();
                $(this.el).html(html);
            }
        }
    });

    var AppRouter = Backbone.Router.extend({
        routes: {
            "*actions": "show"
        }
    });
    // Create the App Router for the application
    var app_router = new AppRouter();

    // Default route
    app_router.on('route:show', function(actions) {

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

    var header = new Header({
        model: {
            title: "The Donors Choice",
            slogan: "It’s The Donors Choice on how, where and when you donate, let us help you.. help us!"
        }
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
})(jQuery);
