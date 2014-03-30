/*
 * This controller is called by /app/assets/javascripts/router.js
 */
define([ // <-- requireJS stuff
    'jquery',
    'backbonejs',
    'views/ResourceView'
], function($, Backbone, ResourceView){
	
	// this function is implicitly called
    var initialize = function() {
    };

    var show = function() {
    	// Render the Resource page
    	var resourceView = new ResourceView();
    	resourceView.render(); // <-- call the render function in /app/assets/javascripts/views/ResourceView.js
    }
    
    // these are the available functions for this object
	return {
        initialize: initialize, // <-- implicitly called
        show: show // <-- used by router.js
	}
});