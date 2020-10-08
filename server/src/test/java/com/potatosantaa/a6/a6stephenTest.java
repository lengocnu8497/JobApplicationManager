package com.potatosantaa.a6;

import com.potatosantaa.server.profiles.JobApp;
import org.junit.*;
public class a6stephenTest {
    private JobApp jobApp;

    @Before
    public void setup(){
        System.out.println("We are testing now.");
        jobApp = new JobApp("12345", "Software Engineer", "Google", "Need to code stuff", true);

    }

    @After
    public void end(){
        System.out.println("Test over.");
    }

    @Test
    public void testJobID(){
        String jobID = jobApp.getJobID();
        Assert.assertEquals(
                "12345", jobID
        );

    }

    @Test
    public void testJobID2(){ //fail test
        String jobID = jobApp.getJobID();
        Assert.assertEquals(
                "10000", jobID
        );

    }




}
