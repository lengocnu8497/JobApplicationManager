package com.potatosantaa.server.services;

import com.potatosantaa.server.profiles.JobApp;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Service
public class JobService {
    public List<JobApp> getAllJobApps(){
        List<JobApp> listOfJobApps = new ArrayList<>();
        listOfJobApps.add(new JobApp("10000", "Software Engineer", "Google", "Code some stuff.", true));
        listOfJobApps.add(new JobApp("10001","Software Engineer", "Amazon", "Do things.", true));
        listOfJobApps.add(new JobApp("10002","Software Developer", "Northrop Grumman", "Save the world.", true));
        listOfJobApps.add(new JobApp("10003","Software Engineering Intern", "Disney", "Solve problems.", true));
        return listOfJobApps;
    }

    public JobApp getJobAppById(String Id){
        Predicate<JobApp> byId = jobApp -> jobApp.getJobID().equals(Id);
        return filterJobApps(byId);
    }

    public JobApp filterJobApps(Predicate<JobApp> strut){
        return getAllJobApps().stream().filter(strut).findFirst().orElse(null);
    }


}
