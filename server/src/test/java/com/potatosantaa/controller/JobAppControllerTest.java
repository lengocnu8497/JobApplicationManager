package com.potatosantaa.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import com.potatosantaa.server.profiles.JobApp;

import org.junit.After;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.junit.Test;
import org.junit.jupiter.api.AfterAll;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
// import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class JobAppControllerTest extends AbstractTest {
    @Override
    @Before
    public void setUp() {
        super.setUp();
        System.out.println("We are testing now.");
    }

    @After
    public void end(){
        System.out.println("Tests are over.");
    }

    @Test
    public void test1() throws Exception {       // createJobApp
        String uri = "/jobapp/createJob";
        JobApp job = new JobApp("20000", "ML Engineer", "Apple", "AI is growing", true);

        String inputJson = super.mapToJson(job);

        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
            .contentType(MediaType.APPLICATION_JSON_VALUE)
            .content(inputJson)).andReturn();
      
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, String.format("JobApp with JobID = %s is created successfully", job.getJobID()));
    }

    @Test
    public void test2() throws Exception {      // getJobApp
        String uri = "/jobapp/getJob";
        String id = "18105";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
            .param("jobId", id)
            .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
      
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        JobApp job = super.mapFromJson(content, JobApp.class);
        System.out.println(job.toString());
    }

    @Test
    public void test3() throws Exception {       // updateJobApp
        String uri = "/jobapp/updateJob";
        JobApp job = new JobApp("20000", "ML Engineer", "Apple", "AI is growing", true);
        job.setCompany("Microsoft");

        String inputJson = super.mapToJson(job);

        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
            .contentType(MediaType.APPLICATION_JSON_VALUE)
            .content(inputJson)).andReturn();
      
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, String.format("JobApp with JobID = %s is updated successfully", job.getJobID()));
    }

    @Test
    public void test4() throws Exception {       // deleteJobApp
        String uri = "/jobapp/deleteJob";
        String id = "20000";
        
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)
           .param("jobId", id)
           .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, String.format("JobApp with JobID = %s has been deleted", id));
    }
}
