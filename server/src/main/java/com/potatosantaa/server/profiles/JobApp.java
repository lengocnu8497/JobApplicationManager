package com.potatosantaa.server.profiles;

public class JobApp {
    private String jobID;
    private String jobTitle;
    private String company;
    private String jobDescription;
    private boolean haveApplied;

    public JobApp(){

    }

    public JobApp(String jobID, String jobTitle, String company, String jobDescription, boolean haveApplied) {
        super();
        this.jobID = jobID;
        this.jobTitle = jobTitle;
        this.company = company;
        this.jobDescription = jobDescription;
        this.haveApplied = haveApplied;
    }

    @Override
	public String toString() {
        return String.format("JobApp [jobID=%s, jobTitle=%s, company=%s, jobDescription=%s, haveApplied=%s",
        jobID, jobTitle, company, jobDescription, Boolean.toString(haveApplied));
    }

    public String getJobID(){
        return jobID;
    }

    public void setJobID(String jobID){
        this.jobID = jobID;
    }

    public boolean isHaveApplied() {
        return haveApplied;
    }

    public void setHaveApplied(boolean haveApplied) {
        this.haveApplied = haveApplied;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }
}
