define([
    'underscorejs',
    'backbonejs'
], function(_, Backbone){

    var router;

    var initialize = function(app_router) {
        router = app_router;
    };

    var navigate = function(route) {
        router.navigate(route, {trigger: true});
    };

    var navigateToRoot = function() {
        navigate('');
    };

    return {
        initialize: initialize,
        navigate: navigate,
        navigateToRoot: navigateToRoot
    }
});