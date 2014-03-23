define([
    'jquery',
    'backbonejs',
    'views/AlertView'
], function($, Backbone, AlertView){

    var show = function(message, type) {
        // Set the default state if type is undefined.
        type = type || 'success';

        new AlertView({
                model: { message: message, attribute: type
            }
        });
    };

    return { show: show }
});