package controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import models.User;
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
        try
        {
            log.info(request().body().asJson().toString());
            newUser = mapper.convertValue(request().body().asJson(), User.class);
        }
        catch (Exception ex)
        {
            log.error("Failed to create a member given data " + request().body().asJson().toString());
            return internalServerError("Unable to create member");
        }

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
                newUser.guid = UserUtils.createGUID();
                newUser.save();
            }
        }

        return ok(newUser.guid);
    }
}
