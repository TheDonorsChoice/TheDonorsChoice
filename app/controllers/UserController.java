package controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import models.User;
import play.data.*;
import play.data.Form;
import play.Logger;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import utilities.UserUtils;

public class UserController extends Controller {

    public static Result currentUser()  {
        if (session().isEmpty()) {
            return ok();
        }

        String guide = session().get("guid");
        User userForGuid =  User.findByString.where().eq("guid", guide).findUnique();
        ObjectNode result = Json.newObject();
        result.put("name", userForGuid.name);
        result.put("email", userForGuid.email);
        return ok(result);
    }

    public static Result logout()  {
        session().clear();
        return ok();
    }

    public static Result createUser()
    {
        DynamicForm requestData = Form.form().bindFromRequest();
        String email = requestData.get("email");
        String password = requestData.get("password");
        String name = requestData.get("name");

        Logger.debug(requestData.toString());

        if (!validInput(email) || !validInput(password) || !validInput(name))
        {
            Logger.error("Failed to create a member or throw exception given data " + requestData.toString());
            return internalServerError("Unable to create member");
        }
        else
        {
            User newUser = new User();
            newUser.name = name;
            newUser.email = email;
            Logger.info(newUser.toString());

            if (User.exists(newUser))
            {
                Logger.info("User " + newUser.email + " already exists");
                return badRequest("user exists");
            }
            else
            {
                Logger.info("Adding new user for email " + newUser.email);
                newUser.password = UserUtils.hashPassword(password);
                newUser.guid = UserUtils.createGUID();
                newUser.save();
            }

            return ok(newUser.guid);
        }
    }

    private static boolean validInput(String field) {
        return field != null && field.length() > 0;
    }

    public static Result authenticate()
    {
        DynamicForm requestData = Form.form().bindFromRequest();
        String email = requestData.get("email");
        String password = requestData.get("password");

        User userForEmail = User.findByString.where().ieq("email", email).findUnique();
        if (userForEmail != null) {
            if (UserUtils.check(password, userForEmail.password)) {
                session().put("guid", userForEmail.guid);
                return UserController.currentUser();
            } else {
                return notFound();
            }
        } else {
            Logger.info("Authentication attempt for non-existent user email " + email);
            return notFound();
        }
    }

    private static class UserAuthenticationRequest
    {
        @JsonProperty(required = true)
        public String email;

        @JsonProperty(required = true)
        public String password;
    }
}
