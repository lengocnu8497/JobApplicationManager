package com.potatosantaa.server.services;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URL;

@Service
public class FireBaseInit {
    @PostConstruct





    public void initialize(){
        try{
         //   FileInputStream serviceAccount;
//            InputStream serviceAccount1 =
//                    this.getClass().getResourceAsStream("/jobapplicationmanager.json");
//            InputStream serviceAccount1 = null;
//
//                File f = new File("/jobapplicationmanager.json");
//                if (f.exists()){
//                    serviceAccount1 = new FileInputStream(f);
//                } else {
//                    URL url = this.getClass().getResource("/jobapplicationmanager.json");
//                    serviceAccount1  = url.openConnection().getInputStream();
//                }
//            if(System.getProperty("user.dir").contains("server")){
//                serviceAccount = new FileInputStream(System.getProperty("user.dir") + "/src/main/resources/jobapplicationmanager.json");
//
//            }
//            else {
//                serviceAccount = new FileInputStream(System.getProperty("user.dir") + "/server/src/main/resources/jobapplicationmanager.json");
//            }
            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(this.getClass().getResourceAsStream("/jobapplicationmanager.json")))
                .setDatabaseUrl("https://jobapplicationmanager-6361b.firebaseio.com")
                .build();


            FirebaseApp.initializeApp(options);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}