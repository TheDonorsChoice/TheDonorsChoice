/*
 * This controller is called by /app/assets/javascripts/router.js
 */
define([ // <-- requireJS stuff
    'jquery',
    'models/ResourceModel',
    'backbonejs',
    'views/RecipientView',
    'collections/ResourceCollection'
], function($, ResourceModel, Backbone, RecipientView, ResourceCollection){
	var resources = new ResourceCollection();
	var resource = new ResourceModel();

	// this function is implicitly called
    var initialize = function() {
    };

    var show = function() {
    	// Render the Recipient page
    	var model = new ResourceModel();
    	console.log(model);
    	var resourceView = new RecipientView( {collection: resources}, {model: resource});
    	
    };
    
    var createResource = function() {
    	var resourceView = new RecipientView( {model: resource} );
    	console.log("In createResource in recipient controller");
    };
    
    var remove = function() {
    	var resourceView = new RecipientView( {model: resource} );
    	resourceView.remove();
    }
    
    // these are the available functions for this object
	return {
        initialize: initialize,
        createResource: createResource,
        remove: remove,// <-- implicitly called
        show: show // <-- used by router.js
	}
});