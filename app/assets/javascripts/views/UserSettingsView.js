define([
    'underscorejs',
    'helpers/RoutingHelper',
    'models/UserModel',
    'controllers/AlertController',
    'compiled-templates'
], function(_, Router, UserModel, AlertController, Templates){

    var view = Backbone.View.extend({
        el: $('#main'),
        template: Templates['user-settings-template'],

        initialize: function() {
            _.bindAll(this, 'render');

            this.listenTo(this.model, "change", this.render);

            // Try to get the user data to prime the UI
            this.model.get_user();
        },

        events: {
            "submit form": "update",
            "account-submit": "update"
        },

        render: function() {
            var html = this.template(this.model);
            this.$el.html(html);
        },

        update: function(e) {
            e.preventDefault();
            var name = $('#account-name').val();
            var email = $('#account-email').val();
            var address_street = $('#account-address').val();
            var address_city = $('#account-address-city').val();
            var address_zip = $('#account-address-zip').val();
            var address_state = $('#account-address-state').val();

            this.model.set("name", name);
            this.model.set("email", email);
            this.model.set("address_street", address_street);
            this.model.set("address_city", address_city);
            this.model.set("address_zip", address_zip);
            this.model.set("address_state", address_state);


            this.model.updateAccount(function() {
                    AlertController.show("Your account info has been successfully updated.", "info");
                },
                function() {
                    AlertController.show("Your account information was unable to be updated.", "danger");
                });
        }
    });

    return view;
});