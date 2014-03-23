package controllers;

import models.Resource;
import play.*;
import play.data.Form;
import play.mvc.*;
import play.mvc.Controller;
import play.mvc.Result;

import views.html.*;

public class ResourceController extends Controller {
	static Form<Resource> resourceForm = Form.form(Resource.class);

	public static void populateForm(){ 
		
		Long id = (long)1111; 
		Resource r1 = new Resource("Pantry1", "100 Fake St", "800-123-4567", "email@email.com", id, "Pantry", "Canned Food" );
		Resource r2 = new Resource("Shelter1", "200 Fake St", "800-999-4567", "email2@email.com", id, "Shelter", "Towels" );
		Resource r3 = new Resource("Pantry2", "300 Fake St", "800-123-9997", "email3@email.com", id, "Pantry", "Food" );
		Resource r4 = new Resource("Shelter2", "400 Fake St", "999-123-4567", "email4@email.com", id, "Shelter", "sheets" );
		resourceForm.fill(r1); 
		resourceForm.fill(r2); 
		resourceForm.fill(r3); 
		resourceForm.fill(r4); 
	}

	public static Result resources() {
		return ok(resource.render(Resource.all(), resourceForm));
	}
	
}
