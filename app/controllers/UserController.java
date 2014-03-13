package controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import models.User;
import play.data.*;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.ImmutablePair;
import play.Logger;
import play.mvc.Controller;
import play.mvc.Result;
import utilities.UserUtils;
import views.html.helper.form;

public class UserController extends Controller {
    private static Logger.ALogger log = play.Logger.of(UserController.class);

    public static Result createUser()
    {
        ObjectMapper mapper = new ObjectMapper();
        User newUser;
        log.info(request().body().asJson().toString());
        newUser = mapper.convertValue(request().body().asJson(), User.class);

        if (newUser == null)
        {
            log.error("Failed to create a member or throw exception given data " + request().body().asJson().toString());
            return internalServerError("Unable to create member");
        }
        else
        {
            if (User.exists(newUser))
            {
                log.info("User " + newUser.email + " already exists");
                return badRequest("user exists");
            }
            else
            {
                log.info("Adding new user for email " + newUser.email);
                newUser.password = UserUtils.hashPassword(newUser.password);
                newUser.guid = UserUtils.createGUID();
                newUser.save();
            }
        }

        return ok(newUser.guid);
    }

    public static Result authenticate()
    {
        DynamicForm requestData = Form.form().bindFromRequest();
        String email = requestData.get("email");
        String password = requestData.get("password");

        User userForEmail = User.findByString.where().eq("email", email).findUnique();
        if (userForEmail != null) {
            if (UserUtils.check(password, userForEmail.password)) {
                return ok(userForEmail.guid);
            } else {
                return notFound();
            }
        } else {
            log.info("Authentication attempt for non-existent user email " + email);
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
