define([
    'underscorejs',
    'backbonejs',
    'jquery'
], function(_, Backbone){
    var ResourceModel = Backbone.Model.extend({
        defaults: {
            orgName: "test",
            address: "",
            phoneNumber: "",
            email: "",
            Type: "",
            title: "",
            itemsNeeded: "",
            description: ""
        },
        
        initialize: function() {
            _.bindAll(this, 'create');
            _.bindAll(this, 'remove');
            _.bindAll(this, 'update_resource');
            _.bindAll(this, 'get_resource');
        },
        
        create: function(success, failure) {
        	console.log("ResourceModel.create()");
            $.post("/resource", {
                Type: this.get("Type"),
                title: this.get("title"),
                itemsNeeded: this.get("itemsNeeded"),
                description: this.get("description")
            }).success(success).fail(failure);
        },
        
        remove: function(id, success, failure) {
        	console.log("Delete the selected post");
        	$.post("/deleteresource", {
        		id: id
        	}).success(success).fail(failure);
        },
        
    	update_resource: function(id, success, failure) {
    		console.log("ResourceModel.update_resource()");
            $.post("/updateresource", {
            	id: id,
                title: this.get("title"),
                itemsNeeded: this.get("itemsNeeded"),
                description: this.get("description")
            }).success(success).fail(failure);
    	},
    	
    	get_resource: function() {
            $.get("/resource", {  }, this.update_resource).fail(this.update_resource);
        }
    });

    // Return the model for the module
    return ResourceModel;
});

