package models;

import java.util.Date;

import org.junit.*;

import static org.junit.Assert.*;


/**
*
* Test Class for User Entity
* Should Validate Types and Find Methods
*
*/
public class UserTest {

    @Test
    public void testUserEntity() {
       User testUser = new User();
       testUser.name = "Jackie Aldama";
       testUser.email = "jaldama@bu.edu";
       testUser.guid = "123123";
       testUser.id = (long) 123;
       testUser.password = "passw0rd";
       testUser.taxId = "00101";
       
       testUser.save();
       assertTrue(User.exists(testUser));
    }

    @Test
    public void testFindUserAccount() {
    	User testUser = new User();
        testUser.name = "Jackie Aldama";
        testUser.email = "jaldama@bu.edu";
        testUser.guid = "123124";
        testUser.id = (long) 124;
        testUser.password = "passw0rd";
        testUser.taxId = "001202";
        
        testUser.save();
        
        UserAccount account = new UserAccount();
        account.user = testUser;
        account.id = (long) 999;
        account.password = "passw0rd123";
        account.createdDate = new Date();
        account.save();
        
        assertTrue(UserAccount.exists(account));
    }

}
