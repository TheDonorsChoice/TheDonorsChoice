require.config({
    paths: {
        // Establish a path for the Bootstrap JS associated with the Bootswatch template.
        'bootstrap': webjars.path('bootswatch-flatly', 'js/bootstrap'),
        'handlebars.runtime': 'libs/handlebars.runtime.amd.min'
    },

    shim: {
        'bootstrap' : { deps: ['jquery'] },
        'bootstrap/bootstrap-slider': { deps: ['jquery'], exports: '$.fn.slider' },
        'bootstrap/bootstrap-affix': { deps: ['jquery'], exports: '$.fn.affix' },
        'bootstrap/bootstrap-alert': { deps: ['jquery'], exports: '$.fn.alert' },
        'bootstrap/bootstrap-button': { deps: ['jquery'], exports: '$.fn.button' },
        'bootstrap/bootstrap-carousel': { deps: ['jquery'], exports: '$.fn.carousel' },
        'bootstrap/bootstrap-collapse': { deps: ['jquery'], exports: '$.fn.collapse' },
        'bootstrap/bootstrap-dropdown': { deps: ['jquery'], exports: '$.fn.dropdown' },
        'bootstrap/bootstrap-modal': { deps: ['jquery'], exports: '$.fn.modal' },
        'bootstrap/bootstrap-popover': { deps: ['jquery'], exports: '$.fn.popover' },
        'bootstrap/bootstrap-scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy' },
        'bootstrap/bootstrap-tab': { deps: ['jquery'], exports: '$.fn.tab' },
        'bootstrap/bootstrap-tooltip': { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap/bootstrap-transition': { deps: ['jquery'], exports: '$.support.transition' },
        'bootstrap/bootstrap-typeahead': { deps: ['jquery'], exports: '$.fn.typeahead'  }
    }
});

define([
  'jquery',
  'underscorejs',
  'backbonejs',
  'bootstrap',
  'router',
  'controllers/MenuController',
  'controllers/UserController',
  'async!http://maps.google.com/maps/api/js?sensor=false'
], function($, _, Backbone, Bootstrap, Router, MenuController, UserController){

	var initialize = function() {
        UserController.initialize();
        MenuController.show();
	};

    return { initialize: initialize };
});