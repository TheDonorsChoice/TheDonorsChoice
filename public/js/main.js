// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
	lib: 'lib/',
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore',
    handlebars: 'lib/handlebars',
    backbone: 'lib/backbone',
    i18nprecompile: 'lib/i18nprecompile',
    hbs: 'lib/hbs',

    templates: '../templates'
  },
  shim: {
	  'handlebars': {
	              exports: 'Handlebars'
        },
      "backbone": {deps:["handlebars"]},
	  "hbs": {deps:["handlebars", "text"]}
  },

  hbs: {
          helpers: true,            // default: true
          i18n: false,              // default: false
          partialsUrl: ''           // default: ''
  },
});

require([
  // Load our app module and pass it to our definition function
  'app'

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});