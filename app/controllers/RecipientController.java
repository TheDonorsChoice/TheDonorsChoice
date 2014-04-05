package controllers;

import models.Recipient;
import play.*;
import play.data.Form;
import play.mvc.*;

import views.html.*;

public class RecipientController extends Controller {
	static Form<Recipient> recipientForm = Form.form(Recipient.class);

	public static Result recipient() {
		return ok(recipient.render(Recipient.all(), recipientForm));
	}

    public static Result jsonRecipient() {
        return ok(play.libs.Json.toJson(Recipient.all()));
    }
	
    public static Result deleteRecipient(Long id) {
  	  Recipient.delete(id); 
  	  return redirect(routes.RecipientController.recipient());
    }
}