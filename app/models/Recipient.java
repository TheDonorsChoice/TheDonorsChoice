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
 * RecipientId, Entity Name (Pantry or organization name), Address, Phone Number, User1 (UserId), Type [Shelter/Food Pantry]
 * 
 * @since 3/22/2014
 */

@Entity
@Table(name = "recipient")
public class Recipient extends Model {

    @Id
    public Long id;

    @Constraints.Required
    @JsonProperty(required = true)
    public String orgName;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String email;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String phoneNumber;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String address;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String title;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String description;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public Long UserID; // should be a foreign key
    
    public static int size = 0; 
    
    public Recipient(String name, String email, String phone, String address, String description, Long userid) { 
    	this.orgName = name; 
    	this.email = email;
    	this.phoneNumber = phone;
    	this.address = address;
    	this.description = description;
    	this.UserID = userid;
    }
    
	public static Finder<Long, Recipient> find = new Finder<Long, Recipient>(Long.class, Recipient.class);
	
	public static List<Recipient> all(){
		return find.all();
	}
	
	public static void create(Recipient recipient) {
		recipient.save(); 
		size++; 
	}
	
	public static void delete(Long id) {
		find.ref(id).delete();
		size--; 
	}
}