/*
 * This controller is called by /app/assets/javascripts/router.js
 */
define([ // <-- requireJS stuff
    'jquery',
    'backbonejs',
    'views/ResourceView',
    'collections/ResourceCollection'
], function($, Backbone, ResourceView, ResourceCollection){
	var resources = new ResourceCollection();

	// this function is implicitly called
    var initialize = function() {
    };

    var show = function() {
    	// Render the Resource page
    	var resourceView = new ResourceView( {collection: resources} );
    };
    
    var createResource = function() {
    	var resourceView = new ResourceView( {model: resource} );
    };
    
    var remove = function() {
    	var resourceView = new ResourceView( {model: resource} );
    	resourceView.remove();
    }
    
    // these are the available functions for this object
	return {
        initialize: initialize, // <-- implicitly called
        show: show // <-- used by router.js
	}
});