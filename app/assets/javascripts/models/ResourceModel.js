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

