package models;

import com.avaje.ebean.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonProperty;

import play.data.validation.Constraints;
import play.db.ebean.Model;
import play.db.ebean.Model.Finder;

import javax.persistence.*;

import java.util.Date;
import java.util.List;

/**
 * UserAccount holds high level user account information
 *
 * @since 4/20
 */
@Entity
public class UserAccount extends Model{
	
	@Id
	public Long id;
	
	 @Constraints.Required
	 @JsonProperty(required = true)
	 public String password;
	
	 @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	 public User user;
	 
	 @Constraints.Required
	 @JsonProperty(required = true)
	 public Date createdDate;
	 
	 public static Finder<Long, UserAccount> findById = new Finder<Long, UserAccount>(Long.class, UserAccount.class);
	 
	 
	 public static void create(UserAccount useraccount)
	 {
		 useraccount.save();
	 }
	 
	 public static boolean exists(UserAccount userAccount) {
	        return findById.where().eq("id", userAccount.id).findIds().size() != 0;
	    }
	 	
}
