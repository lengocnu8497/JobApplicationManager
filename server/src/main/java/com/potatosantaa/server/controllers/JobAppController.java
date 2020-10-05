package com.potatosantaa.server.controllers;

import com.potatosantaa.server.profiles.JobApp;
import com.potatosantaa.server.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class JobAppController {

    @Autowired
    JobService jobService;

    @GetMapping("/jobapp")
    public HashMap getAllJobApps(){
        return jobService.getAllJobApps();
    }

    @GetMapping("/jobapp/{id}")
    public JobApp getJobAppById(@PathVariable("id") String jobAppID){
        return jobService.getJobAppById(jobAppID);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/jobapp")
    public void addJobApp(@RequestBody JobApp jobApp){
        jobService.addJobApp(jobApp);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/jobapp/{id}")
    public void updateJobApp(@RequestBody JobApp jobApp, @PathVariable("id") String jobAppID){
        jobService.updateJobApp(jobApp, jobAppID);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/jobapp/{id}")
    public void deleteJobApp(@PathVariable("id") String jobAppID){
        jobService.deleteJobApp(jobAppID);
    }



}
