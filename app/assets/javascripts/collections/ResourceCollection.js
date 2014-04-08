define([
    'underscorejs',
    'backbonejs',
    'models/ResourceModel'
], function(_, Backbone, ResourceModel){
    var ResourceCollection = Backbone.Collection.extend({
        model: ResourceModel,
        url: "/resources.json",
        
        find: function(filtertext) {
        	if (filtertext == "")
        		return this;
        	// split the search words and store into an array
        	var filterarray = filtertext.split(" ");
        	
        	// filter logic
        	return _(this.filter(function(m) {
        		
        		// check every search word against the search fields
        		for (var i=0; i<filterarray.length; i++) {
        			var temp = filterarray[i]; // this variable contains a keyword
        			if (!temp == " "){
        			
                	var pattern = new RegExp(temp,"i");
                	// is the keyword found in any of our fields?
        			if (pattern.test(m.get("address")) || pattern.test(m.get("orgName")) || pattern.test(m.get("itemsNeeded")))
        				return true; // the keyword was found, this row should be displayed
        			}
        		}
        	}));
        }
    });
    // Return the Collection class to allow others to instantiate it.
    return ResourceCollection;
});