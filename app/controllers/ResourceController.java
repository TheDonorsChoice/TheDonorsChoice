package controllers;

import models.Resource;
import play.*;
import play.data.DynamicForm;
import play.data.Form;
import play.mvc.*;
import views.html.*;

public class ResourceController extends Controller {
	static Form<Resource> resourceForm = Form.form(Resource.class);
    
	public static Result resources() {
		return ok(resource.render(Resource.all(), resourceForm));
	}

    public static Result jsonResources() {
        return ok(play.libs.Json.toJson(Resource.all()));
    }
	//delete resources
    public static Result deleteResource(Long id) {
  	  Resource.delete(id); 
  	  return redirect(routes.ResourceController.resources());
    }
    //create resources
    public static Result createResource() {
    	 DynamicForm requestData = Form.form().bindFromRequest();
    	 String title = requestData.get("title");
    	 String type = requestData.get("Type");
    	 String description = requestData.get("description");
    	 String itemsNeeded = requestData.get("itemsNeeded");
//         String password = requestData.get("password");
//         String name = requestData.get("name");
    	 String items = "";
    	 //String name, String type, String postTitle, String items, String postDescription
    	 Resource resource = new Resource();
    	 resource.description = description;
    	 resource.Type = type;
    	 resource.itemsNeeded = itemsNeeded;
    	 resource.title = title;
    	 //Resource.create(resource); 
    	 resource.save();
    	 return redirect(routes.ResourceController.resources());
      }
}
