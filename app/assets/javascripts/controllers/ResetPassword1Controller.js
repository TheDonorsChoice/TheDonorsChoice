define([
    'jquery',
    'backbonejs',
    'views/ResetPasswordView1',
    'models/ResetPasswordModel1'
], function($, Backbone, ResetPasswordView1, ResetPasswordModel1){

    return {
        show: function(){
            var model = new ResetPasswordModel1();
            new ResetPasswordView1({ model: model });
        }
    }
});