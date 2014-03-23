#!/bin/sh
handlebars --min --amd --extension hbs public/templates/main* --output public/javascripts/compiled-templates.js
handlebars --min --partial --amd --extension hbs public/templates/partials* --output public/javascripts/compiled-partials.js