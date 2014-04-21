define([
    'jquery',
    'backbonejs',
    'views/ResetPassword2View',
    'models/ResetPassword2Model'
], function($, Backbone, ResetPassword2View, ResetPassword2Model){

    return {
        show: function(){
            var model = new ResetPassword2Model();
            new ResetPassword2View({ model: model });
        }
    }
});