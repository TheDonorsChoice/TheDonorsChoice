package controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.node.ObjectNode;

import models.User;
import play.data.*;
import play.Logger;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import utilities.UserUtils;

public class UserController extends Controller {

    public static Result currentUser() {
        if (session().isEmpty()) {
            return ok();
        }

        String guide = session().get("guid");
        User userForGuid = User.findByString.where().eq("guid", guide).findUnique();
        ObjectNode result = Json.newObject();
        result.put("name", userForGuid.name);
        result.put("email", userForGuid.email);
        return ok(result);
    }

    public static Result logout() {
        session().clear();
        return ok();
    }

    public static Result createUser() {
        DynamicForm requestData = Form.form().bindFromRequest();
        String email = requestData.get("email");
        String password = requestData.get("password");
        String name = requestData.get("name");

        //
        //  the following rules are bases on US_UserRegistration_01 document located at google drive Team3/Draft Project1 Files
        //
        if (name.isEmpty() || !NoSpecialCh(name)) {
            Logger.error("Blank name---Failed to create a member or throw exception given data " + requestData.toString());

            //  return internalServerError("Unable to create member");
            return badRequest("Invlaid Name Input");

        } else if (email.isEmpty() || !validEmail(email)) {
            Logger.error("wrong Email---Failed to create a member or throw exception given data " + requestData.toString());

            //return internalServerError("Unable to create member");
            return badRequest("Invlaid Email input");

        } else if (password.isEmpty() || !validPassword(password)) {
            Logger.error("Week Password Failed to create a member or throw exception given data " + requestData.toString());

            //return internalServerError("Unable to create member");
            return badRequest("Weak Password");

        } else {
            User newUser = new User();
            newUser.name = name;
            newUser.email = email;
            Logger.info(newUser.toString());

            if (User.exists(newUser)) {
                Logger.info("User " + newUser.email + " already exists");
                return badRequest("user exists");
            } else {
                Logger.info("Adding new user for email " + newUser.email);
                newUser.password = UserUtils.hashPassword(password);
                newUser.guid = UserUtils.createGUID();
                newUser.save();
            }

            return ok(newUser.guid);
        }
    }

    private static boolean validEmail(String field) {
        int Email_len = field.length();
        int count = 0;
        int at = 0;
        int dot = 0;
        char ch;
        while (count < Email_len) {
            ch = field.charAt(count);

            if (ch == '@') {
                at = at + 1;
            }
            if (ch == '.') {
                dot = dot + 1;
            }

            count = count + 1;
        }
        return at == 1 && dot == 1;
    }

    private static boolean validPassword(String field) {
        int Password_len = field.length();
        int count = 0;
        int digit = 0;
        int lowerCase = 0;
        int upperCase = 0;
        char ch;
        if (Password_len < 7 || Password_len > 12) // according document between 6-12
            return false;
        else {
            while (count < Password_len) {
                ch = field.charAt(count);

                if (Character.isDigit(ch)) {
                    digit = digit + 1;
                }
                if (Character.isLowerCase(ch)) {
                    lowerCase = lowerCase + 1;
                }

                if (Character.isUpperCase(ch)) {
                    upperCase = upperCase + 1;
                }
                count = count + 1;
            }
        }
        return digit >= 1 && lowerCase >= 1 && upperCase >= 1;

    }

    private static boolean NoSpecialCh(String field) {
        char c;
        int specialcharCount = 0;

        for (int j = 0; j < field.length(); j++) {
            c = field.charAt(j);
            if (c == ' ') ;
            else if (Character.isDigit(c)) ;
            else if (Character.isLetter(c)) ;
            else specialcharCount++;
        }
        return specialcharCount == 0;
    }

    public static Result authenticate() {
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

    private static class UserAuthenticationRequest {
        @JsonProperty(required = true)
        public String email;

        @JsonProperty(required = true)
        public String password;
    }
}
