var connection =  new require('./kafka/Connection');
//topics files
let CustomerSignup = require('./services/customer-signup');
let CustomerLogin = require('./services/customer-login');
// let StudentJobs = require('./services/student-jobs');
// let StudentApplications = require('./services/student-applications');
// let StudentApplication = require('./services/student-application');
// let StudentEvents = require('./services/student-events');
// let StudentEvent = require('./services/student-event');
// let StudentBasicDetails = require('./services/student-basic-details');
// let StudentBasicDetail = require('./services/student-basic-detail');
// let StudentSavePicture = require('./services/student-save-picture');
// let StudentEducation = require('./services/student-education');
// let StudentEducationInfo = require('./services/student-education-info');
// let StudentExperience = require('./services/student-experience');
// let StudentExperienceInfo = require('./services/student-experience-info');
// let StudentUpdateEducation = require('./services/student-update-education');
// let StudentUpdateExperience = require('./services/student-update-experience');
// let StudentDeleteEducation = require('./services/student-delete-education');
// let StudentDeleteExperience = require('./services/student-delete-experience');
// let StudentSkillsetInfo = require('./services/student-skillset-info');
// let StudentSkillset = require('./services/student-skillset');
// let Students = require('./services/students');
// let StudentMessage = require('./services/student-message');
// let StudentMessages = require('./services/student-messages');
// let CompanySignup = require('./services/company-signup');
// let CompanyLogin = require('./services/company-login');
// let CompanyJob = require('./services/company-job');
// let CompanyJobs = require('./services/company-jobs');
// let CompanyStudents = require('./services/company-students');
// let CompanyEvent = require('./services/company-event');
// let CompanyEvents = require('./services/company-events');
// let CompanyEventStudents = require('./services/company-event-students');
// let CompanyMessage = require('./services/company-message');
// let CompanyMessages = require('./services/company-messages');
// let CompanyDetails = require('./services/company-details');
// let CompanyInfo = require('./services/company-info');
// let CompanySavePicture = require('./services/company-save-picture');
const connectDB = require('./db/mongoose');

connectDB();

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
		console.log(JSON.stringify(message.value));
		console.log('message');
		console.log(message);
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest('customer_signup', CustomerSignup);
handleTopicRequest('customer_login', CustomerLogin);
// handleTopicRequest('student_jobs', StudentJobs);
// handleTopicRequest('student_applications', StudentApplications);
// handleTopicRequest('student_application', StudentApplication);
// handleTopicRequest('student_events', StudentEvents);
// handleTopicRequest('student_event', StudentEvent);
// handleTopicRequest('student_basic_details', StudentBasicDetails);
// handleTopicRequest('student_basic_detail', StudentBasicDetail);
// handleTopicRequest('student_save_picture', StudentSavePicture);
// handleTopicRequest('student_education', StudentEducation);
// handleTopicRequest('student_education_info', StudentEducationInfo);
// handleTopicRequest('student__experience', StudentExperience);
// handleTopicRequest('student__experience_info', StudentExperienceInfo);
// handleTopicRequest('student_update_education', StudentUpdateEducation);
// handleTopicRequest('student_update_experience', StudentUpdateExperience);
// handleTopicRequest('student_delete_education', StudentDeleteEducation);
// handleTopicRequest('student_delete_experience', StudentDeleteExperience);
// handleTopicRequest('student_skillset_info', StudentSkillsetInfo);
// handleTopicRequest('student_skillset', StudentSkillset);
// handleTopicRequest('students', Students);
// handleTopicRequest('student_message', StudentMessage);
// handleTopicRequest('student_messages', StudentMessages);
// handleTopicRequest('company_signup', CompanySignup);
// handleTopicRequest('company_login', CompanyLogin);
// handleTopicRequest('company_job', CompanyJob);
// handleTopicRequest('company_jobs', CompanyJobs);
// handleTopicRequest('company_students', CompanyStudents);
// handleTopicRequest('company_event', CompanyEvent);
// handleTopicRequest('company_events', CompanyEvents);
// handleTopicRequest('company_event_students', CompanyEventStudents);
// handleTopicRequest('company_message', CompanyMessage);
// handleTopicRequest('company_messages', CompanyMessages);
// handleTopicRequest('company_details', CompanyDetails);
// handleTopicRequest('company_info', CompanyInfo);
// handleTopicRequest('company_save_picture', CompanySavePicture);
