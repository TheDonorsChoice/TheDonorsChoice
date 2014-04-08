/*
 * This view is called by /app/assets/javascripts/controllers/ResourceController.js
 */
define([ // <- requireJS stuff
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'compiled-partials'
], function($, _, Backbone, Templates, Partials){

    var view = Backbone.View.extend({
    	// this is the template being used, which can be found here: /public/templates/resource-template.hbs
        template: Templates['resource-template'],
        listtemplate: Partials['resource-list-template'],
        // our code will be appended to /app/views/main.scala.html
        // somewhere in that file there's an html element where id="main"
        // "el" is now a reference to that element
        el: $("#main"),

        events: {
        	"keyup #filterinput" : "filterlist"
        },
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
        	// build the page using a template and store the results in "resourcehtml"
            var resourcehtml = this.template(this.collection);
            this.$el.html(resourcehtml); // <-- jquery stuff to append "resourcehtml" to "#main"
			var map = new google.maps.Map($("#map-canvas")[0], mapOptions);
        },
        
        // filter 
        filterlist: function() {
        	var filtertext = $("#filterinput").val();
        	var temp = [];
        	var col =  this.collection.find(filtertext);
        	// each item in the collection is an object of attributes
        	// we push the collection of attributes into an array so we can pass it to a template
        	col.each(function(item) {
            	temp.push(item);
        	});
        	// pass the attributes array to the template as "models"
        	var wrapper = {models:temp}; 
        	
        	// build the table using a partial template and store the results in listhtml
        	var listhtml = this.listtemplate(wrapper);
        	
        	// render the table (this table will be a filtered list)
        	$("#resourcelist").html(listhtml);
        }
    });
    return view;
});