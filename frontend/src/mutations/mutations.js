import { gql } from 'apollo-boost';

const studentLoginMutation = gql`
    mutation {
        studentLogin($email: String, $password: String) {
            email: $email
            password: $password
        }{
            userId,
            token
        }
    } 
`;

const companyLoginMutation = gql`
    mutation {
        companyLogin($email: String, $password: String) {
            email: $email
            password: $password
        }{
            userId
            token
        }
    }    
`;

const studentSignupMutation = gql`
    mutation {
        studentSignUp($first_name: String, $last_name: String, $email: String, $password: String, $college_name: String){
            first_name: $first_name
            last_name: $last_name
            email: $email
            password: $password
            college_name: $college_name
        }{
            first_name
            last_name
            email
            college_name
        }
    }    
`;

const companySignupMutation = gql`
    mutation {
        companySignUp($name: String, $email: String, $password: String, $city: String, $state: String, $country: String){
            name: $name
            email: $email
            password: $password
            city: $city
            state: $state
            country: $country
        }{
            name
            email
            city
            state
            country
        }
    }    
`;

const postJobMutation = gql`
    mutation {
        postJob($title: String, $app_deadline: String, $salary: Number, $location: String, $description: String, $job_type: String) {
            title: $title
            app_deadline: $app_deadline
            salary: $salary
            location: $location
            description: $description
            job_type: $job_type
        }{
            title
            posting_date
            location
            salary
            description
            job_type
        }
    }    
`;

const updateCompanyProfileMutation = gql`
    mutation {
        updateCompanyProfile($city: String, $state: String, $country: String){
            city: $city
            state: $state
            country: $country
        }{
            name
            email
            city
            state
            country
        }
    }
`;

const updateStudentProfileMutation = gql`
    mutation {
        updateStudentProfile($skill: String){
            skill: $skill
        }{
            first_name
            last_name
            email
            college_name
            career_objective
            skills
        }
    }    
`;

const applyToJobMutation = gql`
    mutation {
        applyToJob($jobId: String, $resume: String){
            jobId: $jobId
            resume: $resume
        }{
            student
            applied_date
            status
        }
    }    
`;

export { studentLoginMutation, companyLoginMutation, studentSignupMutation, companySignupMutation, postJobMutation, updateCompanyProfileMutation, updateStudentProfileMutation, applyToJobMutation };