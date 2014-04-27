package models;

import com.avaje.ebean.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import play.data.validation.Constraints;
import play.db.ebean.Model;

import javax.persistence.*;

import java.util.List;

/**
 * User is the basic representation of anyone who interacts
 * with the application, and what information we expect to have
 * about them.
 *
 * @since 3/4/2014
 */
@Entity
public class User extends Model {

    @Id
    public Long id;

    @Constraints.Required
    @JsonProperty(required = true)
    public String name;
    
    //Can we eventually get rid of this?
    @Column(unique=true)
    @Constraints.Required
    public String guid;

    @Constraints.Required
    @Column(unique=true, nullable = false)
    @JsonProperty(required = true)
    public String email;

    // Work on removing -- Move up to UserAccount
    @Constraints.Required
    @JsonProperty(required = true)
    public String password;

    @JsonIgnore
    public String resetCode;

    @Constraints.Required
    @JsonProperty(required = true)
    public UserType type;
	
	 @JsonManagedReference("user-res")
	 @OneToMany(mappedBy="user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	 public List<Resource> resources;
	 
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	public Address address;
	
    public String taxId;

    public enum UserType
    {
        @EnumValue("INDIVIDUAL")
        INDIVIDUAL,

        @EnumValue("COMMERCIAL")
        COMMERCIAL,

        @EnumValue("PANTRY")
        PANTRY,

        @EnumValue("SHELTER")
        SHELTER
    }

    public static Finder<Long, User> findById = new Finder<Long, User>(Long.class, User.class);
    public static Finder<String, User> findByString = new Finder<String, User>(String.class, User.class);

    public static void create(User user) {
        user.save();
    }

    public static List<User> all() {
        return findById.all();
    }

    public static boolean exists(User user) {
        return findByString.where().ieq("email", user.email).findIds().size() != 0;
    }
}
