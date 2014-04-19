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

    @ManyToOne(cascade = CascadeType.PERSIST)
	@JoinTable(name="user_id")
	public User user;
    
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
    @JsonProperty(required = false)
    public String Type;
    
    @Constraints.Required
    @JsonProperty(required = false)
    public String title;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String itemsNeeded;
    
    @Constraints.Required
    @JsonProperty(required = false)
    public String description;
    
    public static int size = 0; 
    
    public Resource(String name, String address, String phone, String email, String type, String postTitle, String items, String postDescription){ 
    	this.orgName = name; 
    	this.address = address; 
    	this.phoneNumber = phone; 
    	this.email = email;
    	this.Type = type; 
    	this.title = postTitle;
    	this.itemsNeeded = items;
    	this.description = postDescription;
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

