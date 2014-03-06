package controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import models.User;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.ImmutablePair;
import play.Logger;
import play.mvc.Controller;
import play.mvc.Result;
import utilities.UserUtils;

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
                ImmutablePair<String, String> saltAndPassPair = UserUtils.hashPassword(newUser.password);
                log.debug(String.format("Given password %s, added salt %s and hashed to %s", newUser.password, saltAndPassPair.left, saltAndPassPair.right));
                newUser.salt = saltAndPassPair.left;
                newUser.password = saltAndPassPair.right;
                newUser.guid = UserUtils.createGUID();
                newUser.save();
            }
        }

        return ok(newUser.guid);
    }

    public static Result authenticate()
    {
        ObjectMapper mapper = new ObjectMapper();
        UserAuthenticationRequest authRequest = mapper.convertValue(request().body().asJson(), UserAuthenticationRequest.class);
        User userForEmail = User.findByString.where().eq("email", authRequest.email).findUnique();
        if (userForEmail != null) {
            ImmutablePair<String, String> saltAndHashedPass = UserUtils.hashPassword(authRequest.password, userForEmail.salt);
            if (StringUtils.equals(saltAndHashedPass.getRight(), userForEmail.password)) {
                return ok(userForEmail.guid);
            } else {
                return notFound();
            }
        } else {
            log.info("Authentication attempt for non-existent user email " + authRequest.email);
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
