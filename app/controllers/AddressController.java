package controllers;

import models.Address;
import play.data.Form;
import play.mvc.*;

public class AddressController extends Controller {
	static Form<Address> addressForm = Form.form(Address.class);

    public static Result jsonAddresses() {
        return ok(play.libs.Json.toJson(Address.all()));
    }
	
    public static Result deleteAddress(Long id) {
    	Address.delete(id); 
  	  return redirect(routes.Application.index());
    }
}
