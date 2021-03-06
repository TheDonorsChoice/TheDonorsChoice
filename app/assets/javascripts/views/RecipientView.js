define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController',
    'models/ResourceModel',
    'helpers/RoutingHelper'
], function ($, _, Backbone, Templates, AlertController, ResourceModel, Router) {

    var model = new ResourceModel();
    var view = Backbone.View.extend({
        template: Templates['recipient-template'],
        el: $('#main'),

        events: {
            "click #submit_post": "create",
            "click #delete_post": "remove",
            "click #save_button": "update"
        },

        initialize: function () {
            _.bindAll(this, 'render');
            _.bindAll(this, 'create');
            _.bindAll(this, 'remove');
            _.bindAll(this, 'update');

            this.listenTo(this.collection, "change", this.render);
            this.listenTo(this.collection, "error", this.displayError);

            console.log("Printing from recipient view" + model);
            console.log(model);

            this.collection.fetch({success: function (collection, response, options) {
                collection.trigger("change");
            }});
        },

        render: function () {
            console.log("hi...");
            var recipienthtml = this.template(this.collection);
            this.$el.html(recipienthtml);
            // bind modal popup
            $('#submit_post').on('click', this.create);
            $('#delete_post').on('click', this.remove);
            $('#save_button').on('click', this.update);
            return this;
        },

        displayError: function () {
            AlertController.show("This page requires you to be authenticated.", "danger");
            Router.navigateToRoot();
        },

        create: function (e) {
            console.log("create function called");
            e.preventDefault();

            if ($('#inputTitle').val().length == 0 || $('#textArea').val().length == 0 || $('#inputItemsNeeded').val().length == 0) {
                AlertController.show("Missing form data please, complete form", "danger");
                return;
            }
            // Use the model setters and update the values from the UI
            model.set("title", $('#inputTitle').val());
            model.set("description", $('#textArea').val());
            model.set("itemsNeeded", $('#inputItemsNeeded').val());
            model.set("Type", $('#inputType').val())

            //
            // Success/Error handlers which will allow us to perform UI updates.
            //
            var collection = this.collection;
            var success = function () {
                AlertController.show("Your post has been sent successfully", "info");

                // Force a fetch since we need to force a full update.
                collection.fetch({success: function (collection, response, options) {
                    collection.trigger("change");
                }});
            };

            var error = function () {
                AlertController.show("Your post could not be sent", "danger");
            };

            // Request that the model submit the contact information to the server.
            model.create(success, error);
        },

        remove: function (ev) {
            var collection = this.collection;
            var success = function () {
                AlertController.show("Your post was deleted successfully", "info");

                // Force a fetch since we need to force a full update.
                collection.fetch({success: function (collection, response, options) {
                    collection.trigger("change");
                }});
            };

            var error = function () {
                AlertController.show("Your post could not be deleted", "danger");
            };

            var clicked = $(ev.currentTarget).data('rownum');
            console.log(clicked);

            // model.destroy();
            model.remove(clicked, success, error);
        },

        update: function (ev) {
        	
        	console.log("In the update function of RecipientView.js");

            var success = function () {
                AlertController.show("Your post was updated successfully", "info");
            };

            var error = function () {
                AlertController.show("Your post could not be updated", "danger");
            };

            if ($('#update-inputTitle').val().length == 0 || $('#update-textArea').val().length == 0 || $('#update-inputItemsNeeded').val().length == 0) {
                AlertController.show("Missing form data please, complete form", "danger");
                return;
            }
            // Use the model setters and update the values from the UI
            model.set("title", $('#update-inputTitle').val());
            model.set("description", $('#update-textArea').val());
            model.set("itemsNeeded", $('#update-inputItemsNeeded').val());
            var clicked = $(ev.currentTarget).data('rownum');
            console.log(clicked);
            model.update_resource(clicked, success, error);
        }
    });

    return view;
});