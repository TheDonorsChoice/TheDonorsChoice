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
        'bootstrap/bootstrap-scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy'        },
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
  'controllers/MenuController',
  'controllers/StaticController',
  'controllers/UserController'
], function($, _, Backbone, Bootstrap, MenuController, StaticController, UserController){

	var AppRouter = Backbone.Router.extend({
		routes: {
			"register": UserController.register,
			"logout": UserController.logout,
            "*actions" : StaticController.show('body-comingsoon-template')
			}
		});

    // Create the App Router for the application
    var app_router = new AppRouter();

	var initialize = function() {

        MenuController.show();

		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();
	};

    return { initialize: initialize };
});