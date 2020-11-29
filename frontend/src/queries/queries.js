import { gql } from 'apollo-boost';

const getJobApplicantsQuery = gql`
    query {
        getJobApplicants(jobId: $jobId){
            first_name
            last_name
            email
            college_name
            skills
        }
    }    
`;

const getStudentsQuery = gql`
    query {
        getStudents{
            first_name
            last_name
            email
            college_name
            skills
        }
    }    
`;

const getAllStudentsQuery = gql`
    query {
        getAllStudents{
            first_name
            last_name
            email
            college_name
            skills
        }
    }    
`;

const searchJobsQuery = gql`
    query {
        searchJobs(title: $title){
            title
            location
            salary
            description
            job_type
            posting_date
            app_deadline
        }
    }
`;

export { getJobApplicantsQuery, getStudentsQuery, getAllStudentsQuery, searchJobsQuery };