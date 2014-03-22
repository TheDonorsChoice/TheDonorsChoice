package models;

import com.avaje.ebean.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonProperty;
import play.data.validation.Constraints;
import play.db.ebean.Model;

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
    public Long ResourceID;

    @Constraints.Required
    @JsonProperty(required = true)
    public String orgName;
}
