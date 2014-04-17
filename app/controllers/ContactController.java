package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;

import models.User;
import play.Logger;
import play.data.DynamicForm;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import play.Play;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class ContactController extends Controller {

    public static Result contact()  {
    	 // NOTE this is working but because we can not save THEDonrsChoice email password in clear text
    	// we mapped the password to a local environment variable 
    	// need to work on the email is valid format
    	        
    //	System.out.println("check point");
        DynamicForm requestData = Form.form().bindFromRequest();
         String name = requestData.get("name");
         String email = requestData.get("email");
         String comment = requestData.get("comment");
   

        // Dump the submitted data to the console.
        Logger.debug(name);
        Logger.debug(email);
        Logger.debug(comment);
        
    	
    	String key = Play.application().configuration().getString("key"); 
    	final String key1 = key;
	
        Properties props = new Properties();
   		props.put("mail.smtp.host", "smtp.gmail.com");
   		props.put("mail.smtp.socketFactory.port", "465");
   		props.put("mail.smtp.socketFactory.class",
   				"javax.net.ssl.SSLSocketFactory");
   		props.put("mail.smtp.auth", "true");
   		props.put("mail.smtp.port", "465");
    
   		Session session = Session.getInstance(props,
   			new javax.mail.Authenticator() {
   				protected PasswordAuthentication getPasswordAuthentication() {
   					return new PasswordAuthentication("thedonorschoice",key1);
   					// the password is read from the application.conf file which is mapping to server 
   					//local environment variables
   				}
   			});
           
   		try {
   			 
   			Message message = new MimeMessage(session);
   			message.setFrom(new InternetAddress(name));
   			message.setRecipients(Message.RecipientType.TO,
   					InternetAddress.parse("thedonorschoice@gmail.com"));
   			message.setSubject("A message from ContactUS page from : "+name);
   			message.setText("User Information :," +
   					"\n\n username : "+name+
   					"\n\n email : "+ email+
   					"\n\n comments : "+comment);
    
   			Transport.send(message);
    
    
   		} catch (MessagingException e) {
   			throw new RuntimeException(e);
   		}

   
        return ok();
    }

}
