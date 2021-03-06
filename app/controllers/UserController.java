package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import models.User;
import models.Address;
import play.Logger;
import play.data.DynamicForm;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import utilities.EmailUtils;
import utilities.UserUtils;

import java.util.UUID;

public class UserController extends Controller {

    public static User getCurrentUser() {
        if (session().isEmpty()) {
            return null;
        }

        String guide = session().get("guid");
        User userForGuid = User.findByString.where().eq("guid", guide).findUnique();
        if (userForGuid == null) {
            session().clear();
            return null;
        }

        return userForGuid;
    }

    public static Result currentUser() {
        User currentUser = getCurrentUser();
        if (currentUser == null) {
            return ok();
        }

        ObjectNode result = Json.newObject();
        result.put("name", currentUser.name);
        result.put("email", currentUser.email);
        if (currentUser.addresses.size() == 1) {
            Address address = currentUser.addresses.get(0);
            result.put("address_street", address.street);
            result.put("address_zip", address.zip);
            result.put("address_city", address.city);
            result.put("address_state", address.state);
        }
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
        String type = requestData.get("type");
        String address_street = requestData.get("address_street");
        String address_zip = requestData.get("address_zip");
        String address_city = requestData.get("address_city");
        String address_state = requestData.get("address_state");

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
                newUser.type = User.UserType.valueOf(type.toUpperCase());
                newUser.save();
                newUser.refresh();
                Address addr = new Address();
                addr.city = address_city;
                addr.state = address_state;
                addr.street = address_street;
                addr.zip = address_zip;
                newUser.addresses.add(addr);
                newUser.update();
            }

            return ok(newUser.guid);
        }
    }

    public static Result resetPassword() {
        //
        // Take the data out of the Form posted to the contact method and send an email to our
        // contact address (contact@thedonorschoice.com) with the information provided.
        //
        DynamicForm requestData = Form.form().bindFromRequest();
        String email = requestData.get("email");

        User userForEmail = User.findByString.where().ieq("email", email).findUnique();

        userForEmail.resetCode = UUID.randomUUID().toString().replace("-", "").substring(0, 20);
        userForEmail.save();

        Logger.info(email);
        Logger.info(userForEmail.resetCode);

        String body = String.format("Password reset requested.\n\n" +
                        "Please go here to reset your password: http://www.thedonorschoice.org/#resetpasswordconfirm/%s",
                userForEmail.resetCode
        );

        EmailUtils.sendEmail("noreply@thedonorschoice.org", userForEmail.email, "[TheDonorsChoice.org] Password Reset Request", body);

        return ok();
    }

    public static Result updatePassword() {
        DynamicForm requestData = Form.form().bindFromRequest();

        String password = requestData.get("password");
        String resetCode = requestData.get("resetCode");

        User userForRequestCode = User.findByString.where().ieq("resetCode", resetCode).findUnique();

        if (userForRequestCode == null) {
            Logger.info("User Not Found...");
            return badRequest();
        }

        userForRequestCode.password = UserUtils.hashPassword(password);
        userForRequestCode.resetCode = "";
        userForRequestCode.save();

        return ok();
    }

    public static Result updateUser() {
        User currentUser = UserController.getCurrentUser();
        if (currentUser == null) {
            return badRequest();
        }

        DynamicForm requestData = Form.form().bindFromRequest();

        String name = requestData.get("name");
        String email = requestData.get("email");
        String address_street = requestData.get("address_street");
        String address_city = requestData.get("address_city");
        String address_zip = requestData.get("address_zip");
        String address_state = requestData.get("address_state");

        currentUser.name = name;
        currentUser.email = email;

        Address address;
        if (currentUser.addresses.size() >= 1) {
            address = currentUser.addresses.get(0);
        } else {
            address = new Address();
            currentUser.addresses.add(address);
        }
        address.street = address_street;
        address.city = address_city;
        address.zip = address_zip;
        address.state = address_state;

        currentUser.update();

        return ok();
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
}
