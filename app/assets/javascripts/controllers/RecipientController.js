/*
 * This controller is called by /app/assets/javascripts/router.js
 */
define([ // <-- requireJS stuff
    'jquery',
    'backbonejs',
    'views/RecipientView',
    'collections/ResourceCollection'
], function($, Backbone, RecipientView, ResourceCollection){
	var resources = new ResourceCollection();

	// this function is implicitly called
    var initialize = function() {
    };

    var show = function() {
    	// Render the Recipient page
    	var resourceView = new RecipientView( {collection: resources} );
    };
    
    // these are the available functions for this object
	return {
        initialize: initialize, // <-- implicitly called
        show: show // <-- used by router.js
	}
});