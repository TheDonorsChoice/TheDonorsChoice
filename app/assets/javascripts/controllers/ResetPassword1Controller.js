define([
    'jquery',
    'backbonejs',
    'views/ResetPassword1View',
    'models/ResetPassword1Model'
], function($, Backbone, ResetPassword1View, ResetPassword1Model){

    return {
        show: function(){
            var model = new ResetPassword1Model();
            new ResetPassword1View({ model: model });
        }
    }
});