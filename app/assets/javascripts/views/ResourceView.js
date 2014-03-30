/*
 * This view is called by /app/assets/javascripts/controllers/ResourceController.js
 */
define([ // <- requireJS stuff
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates'
], function($, _, Backbone, Templates){

    var view = Backbone.View.extend({
    	// this is the template being used, which can be found here: /public/templates/resource-template.hbs
        template: Templates['resource-template'],
        // our code will be appended to /app/views/main.scala.html
        // somewhere in that file there's an html element where id="main"
        // "el" is now a reference to that element
        el: $('#main'),

        // this function is implicitly called
        initialize: function() {
            _.bindAll(this, 'render');
        },

        render: function() {
        	// build the page using the template and store the results in 'resourcehtml'
            var resourcehtml = this.template();
            this.$el.html(resourcehtml); // <-- jquery stuff to append "resourcehtml" to "#main"
        }
    });
    return view;
});