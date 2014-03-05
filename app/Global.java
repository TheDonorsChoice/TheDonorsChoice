import com.fasterxml.jackson.databind.JsonNode;
import models.Donor;
import models.Receiver;
import models.User;
import play.Application;
import play.GlobalSettings;
import play.libs.Json;

import java.util.Iterator;
import java.util.UUID;

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
            User user;
            if (nextUserJson.hasNonNull("taxId"))
            {
                user = Json.fromJson(nextUserJson, Receiver.class);
            }
            else
            {
                user = Json.fromJson(nextUserJson, Donor.class);
            }

            user.guid = UUID.randomUUID().toString().replaceAll("-", "");
            user.save();
        }
    }
}
