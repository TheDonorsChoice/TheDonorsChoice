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
        
    	update_resource: function(data) {
            this.set("orgName", data.orgName);
            this.set("address", data.address);
            this.set("phoneNumber", data.phoneNumber);
            this.set("email", data.email);
            this.set("Type", data.Type);
            this.set("title", data.title);
            this.set("itemsNeeded", data.itemsNeeded);
            this.set("description", data.description);
            this.trigger('change', this);
    	},
    	
    	get_resource: function() {
            $.get("/resource", {  }, this.update_resource).fail(this.update_resource);
        }
    });

    // Return the model for the module
    return ResourceModel;
});

