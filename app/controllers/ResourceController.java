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
    	 String type = requestData.get("type");
//         String password = requestData.get("password");
//         String name = requestData.get("name");
    	 String items = "";
    	 //String name, String type, String postTitle, String items, String postDescription
    	 Resource resource = new Resource("",type,title,items,"");
    	 Resource.create(resource); 
    	 return redirect(routes.ResourceController.resources());
      }
}
