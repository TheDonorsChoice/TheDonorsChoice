/*
 * This controller is called by /app/assets/javascripts/router.js
 */
define([ // <-- requireJS stuff
    'jquery',
    'backbonejs',
    'views/ResourceView',
    'collections/ResourceCollection',
    'models/ResourceModel'
], function($, Backbone, ResourceView, ResourceCollection, ResourceModel){
	var resources = new ResourceCollection();
	var resource = new ResourceModel();

	// this function is implicitly called
    var initialize = function() {
    	new RecipientView({ model: resource });
    };

    var show = function() {
    	// Render the Resource page
    	var resourceView = new ResourceView( {collection: resources});
    };
    
    var createResource = function() {
    	var resourceView = new RecipientView( {model: resource} );
    };
    
    var remove = function() {
    	var resourceView = new RecipientView( {model: resource} );
    	resourceView.remove();
    };
    
    // these are the available functions for this object
	return {
        initialize: initialize, // <-- implicitly called
        createResource: createResource,
        remove: remove,
        show: show // <-- used by router.js
	}
});