define([
    'backbonejs',
    'controllers/MenuController',
    'controllers/StaticController'
], function(Backbone, UserController, StaticController) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "register": UserController.register,
            "logout": UserController.logout,
            "faq": "faq",
            "aboutus": "aboutus",
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

    app_router.on("route:defaultRoute", function(){
      StaticController.show('body-comingsoon-template');
    });
    Backbone.history.start();
    return app_router;
});