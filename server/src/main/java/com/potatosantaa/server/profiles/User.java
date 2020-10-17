
package com.potatosantaa.server.profiles;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;

public class User {
    private FirebaseAuth mAuth;
    private UserRecord userRecord;



    public User() throws FirebaseAuthException {

        mAuth = FirebaseAuth.getInstance();
        //-----IF YOU WANT TO CREATE A NEW USER, UNCOMMENT CODE BELOW-----
        //-----WILL FIX UP ONCE WE GET USER AUTHENTICATION FULLY SET UP----
    //    UserRecord.CreateRequest request = new UserRecord.CreateRequest();
    //    request.setEmail("stephen.tayag@gmail.com").setPassword("123456");
    //    userRecord = FirebaseAuth.getInstance().createUser(request);
        userRecord = mAuth.getUserByEmail("stephen.tayag@gmail.com");

        //FirebaseUser currentUser = mAuth.getCurrentUser();
    }

    public String getUID(){
        System.out.println("Successfully created new user: " + userRecord.getUid());
        return userRecord.getUid();
    }
     public String getEmail(){
         System.out.println("Successfully created new user: " + userRecord.getEmail());
         return userRecord.getEmail();
     }


}
