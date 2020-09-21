package com.potatosantaa.server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class HomeController {
    
    String str = "Testing controller";

    @GetMapping("/home")
    public String getHome() {
        return this.str;
    }
    @GetMapping("/stephen")
    public String getStephenName(){
        return "Stephen Tayag's name.";
    }

}