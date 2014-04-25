/*
 * This view is called by /app/assets/javascripts/controllers/ResourceController.js
 */
define([ // <- requireJS stuff
    'jquery',
    'underscorejs',
    'backbonejs',
    'compiled-templates',
    'compiled-partials',
    '../helpers/jquery.quick.pagination',
    'controllers/AlertController'
], function($, _, Backbone, Templates, Partials, QuickP, AlertController){

	var markers = [];
	var map;
    var view = Backbone.View.extend({
    	// this is the template being used, which can be found here: /public/templates/resource-template.hbs
        template: Templates['resource-template'],
        listtemplate: Partials['resource-list-template'],
        maptemplate: Templates['resource-mapwindow-template'],
        // our code will be appended to /app/views/main.scala.html
        // somewhere in that file there's an html element where id="main"
        // "el" is now a reference to that element
        el: $("#main"),

        events: {
        	"keyup #filterinput" : "filterlist",
        	"blur #filterinput" : "markmap",
        	
            "click #submit_post": "create",
            "click #delete_post": "remove"
        		
        },
        // this function is implicitly called
        initialize: function() {
            _.bindAll(this, 'render','filterlist', 'markmap');

            this.listenTo(this.collection, "change", this.render);

            this.collection.fetch({success: function(collection, response, options) {
                collection.trigger("change");
            }});
        },
        
        create: function(e) {
        	console.log("hi");
            e.preventDefault();

            // Use the model setters and update the values from the UI
            this.model.set("title", $('input#inputTitle').val());
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
            this.model.create(success, error);
        },
        
        remove: function() {
        	 var success = function() {
                 AlertController.show("Your post was deleted successfully", "info");
              };

              var error = function() {
                  AlertController.show("Your post could not be deleted", "danger");
              };
        	this.model.remove(success, error);
        },  
        render: function() {    
			var mapOptions = {
				center: new google.maps.LatLng(42.3736158, -71.1097335),
				zoom: 12
			};  
        	// build the page using a template and store the results in "resourcehtml"
            var resourcehtml = this.template(this.collection);
            this.$el.html(resourcehtml); // <-- jquery stuff to append "resourcehtml" to "#main"
            
            // bind the map to map-canvas
			map = new google.maps.Map($("#map-canvas")[0], mapOptions);
			
			$("#resourcelist").quickPagination({pageSize:"4"});
			
			// add the markers to the map
			this.markmap();
        },
        
        // filter 
        filterlist: function() { 
        	// get the values entered in the keyword search
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
        	$("#resourcelist").quickPagination({pageSize:"4"});
        },

        // mark the map with the addresses in the collection
        markmap: function() {	
	    	var geocoder = new google.maps.Geocoder();	
	    	
        	// remove any markers that are currently on the map
        	for (var i=0; i<markers.length; i++) {
        		markers[i].setMap(null);
        	}
        	
        	// mark the map based on the filter
        	var filtertext = $("#filterinput").val();
        	
			// for each item mark its location on the map
        	var col =  this.collection.find(filtertext),
        	    maptemplate = this.maptemplate,
        	    currWindow,
        	    $currSelected;
			col.each(function(item) {
				// get the address from this item
				var address = item.get("address"),
                    orgName = item.get("orgName").replace(/ /g, "\\ ");

				// get the geocode
				// geocodes are needed to mark locations on a google map
				geocoder.geocode( { 'address': address}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						
						// add the marker to the map
						var marker = new google.maps.Marker({
							map: map,
							position: results[0].geometry.location
						});

                        var $listEl = $("#resourcelist div#" + orgName),
                            $emailEl = $("#resourcelist div#" + orgName + " .btn-primary");
                        console.log(orgName);

                        var openMapWindow = function() {
                        	console.log("click");
                            if (currWindow) currWindow.close();
                            if ($currSelected)  $currSelected.removeClass("selected");
                            currWindow = new google.maps.InfoWindow({
                              content: maptemplate(item.attributes)
                            });
                            currWindow.open(map,marker);
                            $currSelected = $listEl.addClass("selected");
                        };

						// add a listener for the marker, so when it's clicked we display something
						google.maps.event.addListener(marker, 'click', openMapWindow);
						$listEl.on("click", openMapWindow);
						$emailEl.on("click", sendEmail);
						
						// add the marker to an array
						// we're doing this so we have the ability to remove it, when needed
						markers.push(marker);
					} 
					else {
						console.log("Address not found.  Geocode error: " + status);
					}
				});
			});
        }
    });

    var sendEmail = function(e) {
        e.preventDefault();
        // how do we access user model here to validate logged in user? - JT
        AlertController.show("An email has been sent to this donor");
    }
    return view;
});