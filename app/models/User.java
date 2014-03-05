package models;

import com.avaje.ebean.annotation.EnumValue;
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
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class User extends Model {

    @Id
    public Long id;

    @Constraints.Required
    public String name;

    @Column(unique=true)
    @Constraints.Required
    public String guid;

    @Constraints.Required
    @Column(unique=true)
    public String email;

    @Constraints.Required
    public String password;

    @Constraints.Required
    public UserType type;

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

    public static Finder<Long, User> find = new Finder<>(Long.class, User.class);

    public static void create(User user) {
        user.save();
    }

    public static List<User> all() {
        return find.all();
    }
}
