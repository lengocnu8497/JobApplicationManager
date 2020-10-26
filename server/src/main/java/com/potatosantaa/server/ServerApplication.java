package com.potatosantaa.server;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.potatosantaa.server.profiles.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;

@Configuration
@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) throws Exception{
		SpringApplication.run(ServerApplication.class, args);
		try {
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(new ClassPathResource("/jobapplicationmanager.json").getInputStream()))
					.setDatabaseUrl("https://jobapplicationmanager-6361b.firebaseio.com")
					.build();
			if(FirebaseApp.getApps().isEmpty()) { //<--- check with this line
				FirebaseApp.initializeApp(options);
			}
		} catch (
				IOException e) {
			e.printStackTrace();
		}
	}

}
