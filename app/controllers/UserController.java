package controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import models.User;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by epanahi on 3/5/14.
 */
public class UserController extends Controller {

    public static Result createUser()
    {
        ObjectMapper mapper = new ObjectMapper();
        User newUser = null;
        try
        {
            System.out.println(request().body().asJson());
            newUser = mapper.convertValue(request().body().asJson(), User.class);
        }
        catch (Exception ex)
        {
            System.out.println(ex);
        }

        if (newUser == null)
        {
            System.out.println("couldn't make a user");
        }

        return ok(Json.toJson(newUser));
    }
}
