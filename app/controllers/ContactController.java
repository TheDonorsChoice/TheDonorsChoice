package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import models.User;
import play.Logger;
import play.data.DynamicForm;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class ContactController extends Controller {

    public static Result contact()  {
        //
        // Take the data out of the Form posted to the contact method and send an email to our
        // contact address (contact@thedonorschoice.com) with the information provided.
        //
        DynamicForm requestData = Form.form().bindFromRequest();
        String name = requestData.get("name");
        String email = requestData.get("email");
        String comment = requestData.get("comment");

        // Dump the submitted data to the console.
        Logger.debug(name);
        Logger.debug(email);
        Logger.debug(comment);

        // TODO: Use this data to send an email.
        // Need to use the Play Framework plugin from here: https://github.com/typesafehub/play-plugins/tree/master/mailer

        return ok();
    }

}
