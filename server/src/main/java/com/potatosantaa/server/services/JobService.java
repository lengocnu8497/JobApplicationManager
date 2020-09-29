package com.potatosantaa.server.services;

import com.potatosantaa.server.profiles.JobApp;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.function.Predicate;

@Service
public class JobService {

    private HashMap<String, JobApp> listOfJobApps = new HashMap<String, JobApp>() {
        {
            put("10000", new JobApp("10000", "Software Engineer", "Google", "Code some stuff.", true));
            put("10001",new JobApp("10001","Software Engineer", "Amazon", "Do things.", true));
            put("10002",new JobApp("10002","Software Developer", "Northrop Grumman", "Save the world.", true));
            put("10003",new JobApp("10003","Software Engineering Intern", "Disney", "Solve problems.", true));
        }
    };


    public HashMap getAllJobApps(){

        return listOfJobApps;
    }

    public JobApp getJobAppById(String id){
      //  Predicate<JobApp> byId = jobApp -> jobApp.getJobID().equals(id);
        return listOfJobApps.get(id);
    }



    public void addJobApp(JobApp jobApp){
        listOfJobApps.put(jobApp.getJobID(), jobApp);
    }

    public void updateJobApp(JobApp jobApp, String id){
        listOfJobApps.put(id, jobApp);
    }

    public void deleteJobApp(String id){
        listOfJobApps.remove(id);
    }



}
