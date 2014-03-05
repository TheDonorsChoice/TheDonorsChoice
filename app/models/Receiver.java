package models;


import play.data.validation.Constraints;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("Receiver")
public class Receiver extends User {

    @Constraints.Required
    public String taxId;
}
