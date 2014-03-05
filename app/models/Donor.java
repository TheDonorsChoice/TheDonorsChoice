package models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

/**
 * This class should represent data that is overly specific to be in user,
 * data that we need to keep about anyone who wants to donate some resource
 * using the application.  This might be preferences that they have specified,
 * tracking information, or similar information
 *
 * @since 3/4/2014
 */
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("Donor")
public class Donor extends User {

}
