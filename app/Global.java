import com.fasterxml.jackson.databind.JsonNode;
import models.User;
import models.Resource;
import models.Address;
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

        /*
        if (User.all().size() == 0) {
            populateUsers(app);
        }

        if (Resource.all().size() == 0) {
            populateResources(app);
        }
        
        if (Address.all().size() == 0) {
            populateAddresses(app);
        }
        */
    }

    public static void populateUsers(Application app) {
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
    
    public static void populateAddresses(Application app) {
        JsonNode root = Json.parse(app.resourceAsStream("testdata.json"));
        JsonNode addressList = root.findPath("addresses");

        Iterator iter = addressList.elements();
        while (iter.hasNext())
        {
            JsonNode nextAddressJson = (JsonNode) iter.next();
            Address address = Json.fromJson(nextAddressJson, Address.class);

            address.save();
        }
    }

    public static void populateResources(Application app) {
        JsonNode root = Json.parse(app.resourceAsStream("testdata.json"));
        JsonNode resourceList = root.findPath("resources");

        Iterator resourceIterator = resourceList.elements();
        while (resourceIterator.hasNext())
        {
            JsonNode nextResourceJson = (JsonNode) resourceIterator.next();
            Resource resource = Json.fromJson(nextResourceJson, Resource.class);
            
            resource.user = User.all().get(0);

            // Save the user to the database...
            resource.save();
        }
    }
}
