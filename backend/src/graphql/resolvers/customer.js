//const Job = require('../../models/Job');
var express = require('express');

module.exports = {
    // searchJobs: async (args, context) => {
    //     try {
    //       const jobs = await Job.find();
    //       return jobs.filter(job => job.title.includes(args.title)).map(job => {
    //           return {
    //             ...job._doc,
    //             posting_date: new Date(job._doc.posting_date).toISOString().split('T')[0],
		//             app_deadline: new Date(job._doc.app_deadline).toISOString().split('T')[0]
    //           }
    //       });
    //     } catch (e) {
    //         return new Error('Unable to fetch data.');
    //     }
    // },
    updateCustomerProfile: async (args, context) => {
        try {
          const input = args.customerInput;
          const customer = await Customer.findById(context.req.user._id);
          customer.skills.push(input.skill);
          const result = await customer.save();
          return { ...result._doc };
        } catch (e) {
          return new Error('Unable to update the student. Please try again.');
        }
    },
    getAllCustomers: async (args, context) => {
        try {
            const customers = await Customer.find({ _id: {'$ne': context.req.user._id}});
            return customers;
        } catch (e) {
            return new Error('Unable to fetch data.');
        }
    },
    // applyToJob: async (args, context) => {
    //     const { jobId, resume } = args.applyJobInput;
    //     const job = await Job.findById(jobId);
    //     const student = context.req.user._id;
    //     try {
    //       const application = {
    //         student,
    //         resume,
    //         applied_date: new Date(),
    //         status: 'Pending'
    //       };
    //       job.application.unshift(application);
    //       await job.save();
    //       application.applied_date = new Date(application.applied_date).toISOString().split('T')[0];
    //       return application;
    //     } catch (e) {
    //       return new Error('Unable to apply job. Please try again.');
    //     }
    // }, 
};
