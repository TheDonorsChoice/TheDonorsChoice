define([
    'jquery',
    'backbonejs',
    'views/ResetPassword2View',
    'models/UserModel'
], function($, Backbone, ResetPassword2View, UserModel){

    return {
        show: function(resetCode){
            var model = new UserModel();
            model.set("resetCode", resetCode)
            new ResetPassword2View({ model: model });
        }
    }
});