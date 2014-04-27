package controllers;


import models.Resource;
import models.User;
import play.Logger;
import play.data.DynamicForm;
import play.data.Form;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Results;
import utilities.EmailUtils;
import views.html.resource;

public class ResourceController extends Controller {
    static Form<Resource> resourceForm = Form.form(Resource.class);

    public static Result resources() {
        return ok(resource.render(Resource.all(), resourceForm));
    }

    public static Result jsonResources() {
        // Restricting the resource page to registered users.
        User currentUser = UserController.getCurrentUser();
        if (currentUser == null) {
            return ok();
        }

        return ok(play.libs.Json.toJson(Resource.all()));
    }

    //delete resources
    public static Result deleteResource(Long id) {
        Resource.delete(id);
        return redirect(routes.ResourceController.resources());
    }

    //create resources
    public static Result createResource() {

        String guide = session().get("guid");
        User userForGuid = User.findByString.where().eq("guid", guide).findUnique();
        Logger.info(userForGuid.type.toString() + " " + userForGuid.name);
        if ((userForGuid.type == User.UserType.PANTRY) || (userForGuid.type == User.UserType.SHELTER)) {
            DynamicForm requestData = Form.form().bindFromRequest();
            String title = requestData.get("title");
            String type = requestData.get("type");
            String description = requestData.get("description");
            String itemsNeeded = requestData.get("itemsNeeded");
            String items = "";
            Resource resource = new Resource();
            resource.user = userForGuid;
            resource.description = description;
            resource.Type = userForGuid.type.toString();
            resource.itemsNeeded = itemsNeeded;
            resource.title = title;
            Resource.create(resource);
            return Results.created();
        } else {
            return Results.badRequest("Invalid User Type");
        }
    }

    public static Result contactOrganization() {
        User currentUser = UserController.getCurrentUser();
        if (currentUser == null) {
            return badRequest();
        }

        DynamicForm requestData = Form.form().bindFromRequest();
        long resourceId = Long.parseLong(requestData.get("id"));
        Resource resource = Resource.find.where().eq("id", resourceId).findUnique();

        String body = String.format("Request from: %s\n\nEmail: %s\n\nAbout %s", currentUser.name, currentUser.email, resource.description);

        EmailUtils.sendEmail("thedonorschoice@gmail.com", resource.email, "[TheDonorsChoice.org] Contact Request", body);

        return ok();
    }

}
