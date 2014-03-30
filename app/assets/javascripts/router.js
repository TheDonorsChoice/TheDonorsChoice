define([
    'backbonejs',
    'controllers/UserController',
    'controllers/StaticController',
    'controllers/ContactController'
], function(Backbone, UserController, StaticController, ContactController) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "contact" : ContactController.show,
            "register": UserController.register,
            "logout": UserController.logout,
            "faq": "faq",
            "aboutus": "aboutus",
            "": "landing",
            "*actions" : "defaultRoute"
        }
    });

    // Create the App Router for the application
    var app_router = new AppRouter;

    app_router.on("route:faq", function(){
          StaticController.show('faq-template');
    });

    app_router.on("route:aboutus", function(){
           StaticController.show('aboutus-template');
    });

    app_router.on("route:landing", function(){
        StaticController.show('body-comingsoon-template');
    });

    app_router.on("route:defaultRoute", function(){
      StaticController.show('body-error-template');
    });

    Backbone.history.start();
    return app_router;
});