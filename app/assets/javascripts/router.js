define([
    'backbonejs',
    'controllers/MenuController',
    'controllers/StaticController'
], function(Backbone, UserController, StaticController) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "register": UserController.register,
            "logout": UserController.logout,
            "*actions" : StaticController.show('body-comingsoon-template')
        }
    });

    // Create the App Router for the application
    var app_router = new AppRouter;

    Backbone.history.start();
    return app_router;
});