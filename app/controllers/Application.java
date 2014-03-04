package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import play.*;
import play.data.*;
import play.libs.Json;
import play.mvc.*;
import views.html.*;

import java.util.Map;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render(""));
    }

    public static Result authenticate() {

        DynamicForm requestData = Form.form().bindFromRequest();
        String username = requestData.get("username");
        String password = requestData.get("password");

        if (username.equals("admin") && password.equals("admin")) {

            ObjectNode result = Json.newObject();
            result.put("first_name", "Joe");
            result.put("last_name", "Schmoe");

            return ok(result);
        } else {
            return badRequest();
        }
    }

}
