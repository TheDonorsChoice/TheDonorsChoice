package models;

import com.avaje.ebean.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class Address extends Model {

	@Id
	public Long id;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonBackReference("user-addr")
	public  User user;

    @Constraints.Required
    @JsonProperty(required = true)
    public String street;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String city;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String state;
    
    @Constraints.Required
    @JsonProperty(required = true)
    public String zip;
     
    public static int size = 0; 
    
    
	public static Finder<Long, Address> find = new Finder<Long, Address>(Long.class, Address.class);
	
	public static List<Address> all(){
		return find.all();
	}
	
	public static Address findById(Long id){
		return find.byId(id);
	}
	
	public static void create(Address address){
		address.save(); 
		size++; 
	}
	
	public static void delete(Long id){
		find.ref(id).delete();
		size--; 
	}
}

