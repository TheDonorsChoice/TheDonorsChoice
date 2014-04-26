package controllers;

import models.Resource;
import play.*;
import play.data.Form;
import play.mvc.*;

import views.html.*;

public class RecipientController extends Controller {
	static Form<Resource> resourceForm = Form.form(Resource.class);
    
	public static Result resources() {
		return ok(resource.render(Resource.all(), resourceForm));
	}

    public static Result jsonResources() {
        return ok(play.libs.Json.toJson(Resource.all()));
    }
}
