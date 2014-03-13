import com.fasterxml.jackson.databind.JsonNode;
import models.User;
import play.Application;
import play.GlobalSettings;
import play.libs.Json;
import utilities.UserUtils;

import java.util.Iterator;

public class Global extends GlobalSettings {

    /**
     * Methods to run when launching the app.  Currently loads some test data
     */
    public void onStart(Application app) {
        if (User.all().size() == 0) {
            populateUsers(app);
        }
    }

    public static void populateUsers(Application app){
        JsonNode root = Json.parse(app.resourceAsStream("testdata.json"));
        JsonNode userList = root.findPath("users");

        Iterator iter = userList.elements();
        while (iter.hasNext())
        {
            JsonNode nextUserJson = (JsonNode) iter.next();
            User user = Json.fromJson(nextUserJson, User.class);

            // Get the password field from the user and generate the salt.
            user.password = UserUtils.hashPassword(user.password);
            user.guid = UserUtils.createGUID();
            user.save();
        }
    }
}
