package controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import models.Request;
import models.User;
import play.data.*;
import play.data.Form;
import play.Logger;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import utilities.UserUtils;

public class RequestController extends Controller {
	
    public Request modifyRequest(Request aRequest) {
	
		DynamicForm requestData = Form.form().bindFromRequest();
		String name = requestData.get("name");
		String description = requestData.get("description");
        String email = requestData.get("email");
        String type = requestData.get("type"); //is this a string or requesttype
		
		aRequest.setName(name);
    	aRequest.setName(description);
		aRequest.setName(email);
		aRequest.setName(type);
		
		//persist somehow
	}
	
	public Result createRequest() {
		DynamicForm requestData = Form.form().bindFromRequest();
        String email = requestData.get("email");
        String type = requestData.get("type"); //string or request type?
        String name = requestData.get("name");
		String description = requestData.get("description");
		// get current user
		
		// then some type of validation
        Request newRequest = new Request();
        newRequest.name = name;
        newRequest.email = email;
		newRequest.type = type;
		newRequest.description = description; //setters?
		newRequest.setUserId = "";//id
        newRequest.save();

		return ok(newRequest);
        }
	}
	
	public Result deleteRequest(Request aRequest) {
		aRequest.delete(aRequest.getId());
	}
}
