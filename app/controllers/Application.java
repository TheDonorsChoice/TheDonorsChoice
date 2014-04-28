package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import play.data.*;
import play.libs.Json;
import play.mvc.*;
import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

}
