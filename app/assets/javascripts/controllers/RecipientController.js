define([
    'jquery',
    'backbonejs',
    'views/RecipientView',
    'collections/RecipientCollection'
], function($, Backbone, RecipientView, RecipientCollection){
	var recipient = new RecipientCollection();

    var initialize = function() {
    };

    var show = function() {
    	var recipientView = new RecipientView( {collection: recipient} );
    };
    
	return {
        initialize: initialize,
        show: show
	}
});