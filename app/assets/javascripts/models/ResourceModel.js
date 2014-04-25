define([
    'underscorejs',
    'backbonejs'
], function(_, Backbone){
    var ResourceModel = Backbone.Model.extend({
        defaults: {
            orgName: "",
            address: "",
            phoneNumber: "",
            email: "",
            Type: "",
            title: "",
            itemsNeeded: "",
            description: ""
        },
        
        create: function(success, failure) {
        	console.log("Hi");
            $.post("/resource", {
                Type: this.get("Type"),
                title: this.get("title"),
                itemsNeeded: this.get("itemsNeeded"),
                description: this.get("description")
            }).success(success).fail(failure);
        },
        
        remove: function(success, failure) {
        	console.log("Delete");
        	this.trigger('remove', this);
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
    	}
    });
        // Return the model for the module
        return ResourceModel;
    });

