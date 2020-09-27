package com.potatosantaa.server.controllers;

import com.potatosantaa.server.profiles.JobApp;
import com.potatosantaa.server.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobAppController {

    @Autowired
    JobService jobService;

    @GetMapping("/jobapp")
    public List<JobApp> getAllJobApps(){
        return jobService.getAllJobApps();
    }

    @GetMapping("/jobapp/{id}")
    public JobApp getJobAppById(@PathVariable("id") String jobAppID){
        return jobService.getJobAppById(jobAppID);
    }



}
