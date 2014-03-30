define([
    'backbonejs',
    'controllers/MenuController',
    'controllers/StaticController',
    'controllers/ResourceController'
], function(Backbone, UserController, StaticController, ResourceController) {
    var AppRouter = Backbone.Router.extend({
        routes: {
        	// these are paths off our main URL.  ex www.thedonorschoice.org/#register
            "register": UserController.register,
            "logout": UserController.logout,
            "faq": "faq",
            "aboutus": "aboutus",
            "donate": "donate",
            "": "landing", // <-- our main URL -- www.thedonorschoice.org
            "*actions" : "defaultRoute" // <-- default page for unimplemented urls
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
    
    app_router.on("route:donate", function(){
    	// call the controller associated to the resource path.  located here: /app/assets/controllers/ResoureController.js
        ResourceController.show('resource-template');
    });

    app_router.on("route:defaultRoute", function(){
      StaticController.show('body-error-template');
    });

    Backbone.history.start();
    return app_router;
});