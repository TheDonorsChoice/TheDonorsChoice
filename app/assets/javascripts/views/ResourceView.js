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

            this.listenTo(this.collection, "change", this.render);

            this.collection.fetch({success: function(collection, response, options) {
                collection.trigger("change");
            }});
        },

        render: function() {    
	    	var geocoder = new google.maps.Geocoder();
			var mapOptions = {
				center: new google.maps.LatLng(42.3736158, -71.1097335),
				zoom: 10
			};  
        	// build the page using the template and store the results in 'resourcehtml'
            var resourcehtml = this.template(this.collection);
            this.$el.html(resourcehtml); // <-- jquery stuff to append "resourcehtml" to "#main"
            
			var map = new google.maps.Map($("#map-canvas")[0], mapOptions);
        }
    });
    return view;
});