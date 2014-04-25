define([
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'controllers/AlertController'
], function($, _, Backbone, Templates, AlertController){

    var view = Backbone.View.extend({
        template: Templates['recipient-template'],
        el: $('#main'),
        
         events: {
            "click #submit_post": "submit",
            "click #delete_post": "remove"
        },

        initialize: function() {
            _.bindAll(this, 'render');

            this.listenTo(this.collection, "change", this.render);

            this.collection.fetch({success: function(collection, response, options) {
                collection.trigger("change");
            }});
        },
        
        submit: function(e) {
            e.preventDefault();

            // Use the model setters and update the values from the UI
            this.model.set("title", $('input#inputEmail').val());
            this.model.set("description", $('input#textArea').val());

            //
            // Success/Error handlers which will allow us to perform UI updates.
            //
            var success = function() {
               AlertController.show("Your post has been sent successfully", "info");
            };

            var error = function() {
                AlertController.show("Your post could not be sent", "danger");
            };

            // Request that the model submit the contact information to the server.
            this.model.submit(success, error);
        },
        
        remove: function() {
        	this.model.remove(success, error);
        },      

        render: function() {
            var recipienthtml = this.template(this.collection);
            this.$el.html(recipienthtml);
        }
    });
    
    return view;
});