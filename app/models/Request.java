package models;
import com.avaje.ebean.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonProperty;
import play.data.validation.Constraints;
import play.db.ebean.Model;
import play.db.ebean.Model.Finder;

import javax.persistence.*;

import java.util.List;

/**
 * Recipient is the model for the organization that is looking for a donation. The following fields are included.
 *
 * ResourceID, Entity Name (Pantry or organization name), Address, Phone Number, User1 (UserId), Type [Shelter/Food Pantry], Items Needed
 * 
 * @since 3/22/2014
 */

@Entity
public class Request extends Model {

    @Id
    public Long id;

    @Constraints.Required
    @JsonProperty(required = true)
    public String name;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String description;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public int quantity;
    
    @Constraints.Required
    @JsonProperty(required = false)
    public Long userId;  //should be foreign key
	
	public enum RequestType
    {
        @EnumValue("SERVICE")
        SERVICE,

        @EnumValue("COMMODITY")
        COMMODITY
    }
    
    public Request(String name, String description, int quantity, Long userId, RequestType type){ 
    	this.name = name; 
    	this.description = description; 
    	this.userId = userId; 
    	//this.email = email;
    	//this.type = type;
    }
    
	public static Finder<Long, Request> find = new Finder<Long, Request>(Long.class, Request.class);
	
	public static List<Request> all(){
		return find.all();
	}
	
	public static void create(Request request){
		request.save(); 
		//size++;
	}
	
	public static void delete(Long id){
		find.ref(id).delete();
		//size--;
	}
}

