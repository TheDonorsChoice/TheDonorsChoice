package models;

import com.avaje.ebean.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonProperty;
import play.data.validation.Constraints;
import play.db.ebean.Model;
import play.db.ebean.Model.Finder;

import javax.persistence.*;

import java.util.List;

/**
 * Resource is the model for the organization that is looking for a donation. The following fields are included.
 *
 * ResourceID, Entity Name (Pantry or organization name), Address, Phone Number, User1 (UserId), Type [Shelter/Food Pantry], Items Needed
 * 
 * @since 3/22/2014
 */

@Entity
public class Resource extends Model {

    @Id
    public Long id;

    @Constraints.Required
    @JsonProperty(required = true)
    public String orgName;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String address;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String phoneNumber;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String email;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public Long UserID;
    
    @Constraints.Required
    @JsonProperty(required = false)
    public String Type;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String itemsNeeded;
    
    public static int size = 0; 
    
    public Resource(String name, String address, String phone, String email, Long userid, String type, String items){ 
    	orgName = name; 
    	this.address = address; 
    	phoneNumber = phone; 
    	this.email = email; 
    	UserID = userid; 
    	Type = type; 
    	itemsNeeded = items; 
    }
    
	public static Finder<Long, Resource> find = new Finder<Long, Resource>(Long.class, Resource.class);
	
	public static List<Resource> all(){
		return find.all();
	}
	
	public static void create(Resource resource){
		resource.save(); 
		size++; 
	}
	
	public static void delete(Long id){
		find.ref(id).delete();
		size--; 
	}
}

