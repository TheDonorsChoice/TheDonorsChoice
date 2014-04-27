package controllers;

import play.data.DynamicForm;
import play.data.Form;
import play.mvc.Controller;
import play.mvc.Result;
import utilities.EmailUtils;


public class ContactController extends Controller {

    public static Result contact() {
        // Gather the relevant information from the post and pass the info along to the form.
        DynamicForm requestData = Form.form().bindFromRequest();
        String name = requestData.get("name");
        String email = requestData.get("email");
        String comment = requestData.get("comment");

        String body = String.format("Contact Information:\n\nName: %s\n\nEmail: %s\n\nComments: %s", name, email, comment);

        if (EmailUtils.sendEmail(email, "codeforyou@gmail.com", "[TheDonorsChoice.org] New Message from contact page", body)) {
            return ok();
        } else {
            return badRequest();
        }
    }

}
