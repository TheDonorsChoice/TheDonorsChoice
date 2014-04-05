define([
    'backbonejs',
    'controllers/UserController',
    'controllers/StaticController',
    'controllers/ContactController',
    'controllers/ResourceController',
    'controllers/RecipientController',
    'controllers/ResetPassword1Controller',
    'helpers/RoutingHelper'
], function(Backbone, UserController, StaticController, ContactController, ResourceController, RecipientController, ResetPasswordController, RoutingHelper) {


    var AppRouter = Backbone.Router.extend({
        routes: {
            "contact" : ContactController.show,
            // these are paths off our main URL.  ex www.thedonorschoice.org/#register
            "register": UserController.register,
            "logout": UserController.logout,
            "faq": "faq",
            "aboutus": "aboutus",
            "donate": "donate",
            "resource": ResourceController.show,
            "recipient": RecipientController.show,
            "": "landing", // <-- our main URL -- www.thedonorschoice.org
            "*actions" : "defaultRoute" // <-- (404) default page for unimplemented urls
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
        StaticController.show('index-template');
    });

    app_router.on("route:donate", function(){
        // call the controller associated to the resource path.  located here: /app/assets/controllers/ResoureController.js
        ResourceController.show('resource-template');
    });

	app_router.on("route:recipient", function(){
        RecipientController.show('recipient-template');
    });
	
    app_router.on("route:defaultRoute", function(){
        StaticController.show('body-error-template');
    });

    Backbone.history.start();

    RoutingHelper.initialize(app_router);

    return app_router;
});