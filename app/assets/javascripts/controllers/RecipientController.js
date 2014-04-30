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
    resources.url = "/user/resources.json";

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
    };
   
   var update = function() {
	   console.log("In update in RecipientController.js");
	   var resourceView = new RecipientView( {model: resource} );
	   resourceView.update();
   };
    
    // these are the available functions for this object
	return {
        initialize: initialize,
        createResource: createResource,
        remove: remove,// <-- implicitly called
        update: update,
        show: show // <-- used by router.js
	}
});