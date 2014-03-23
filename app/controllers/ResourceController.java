package controllers;

import models.Resource;
import play.data.Form;
import play.mvc.Controller;
import play.mvc.Result;

import views.html.*;

public class ResourceController extends Controller{
	static Form<Resource> resourceForm = Form.form(Resource.class);
	
	  
	public static Result resources() {
		  return ok (resource.render(Resource.all(), resourceForm));
		}
	  
	public static Result newTask() {
		  Form<Resource> filledForm = resourceForm.bindFromRequest();
		  if(filledForm.hasErrors()) {
		    return badRequest(
		      resource.render(Resource.all(), filledForm)
		    );
		  } else {
			  Resource.create(filledForm.get());
		    return redirect(routes.Application.resources());  
		  }}
	  
	public static Result deleteTask(Long id) {
		Resource.delete(id);
		  return redirect(routes.Application.resources());
		}
	

}
