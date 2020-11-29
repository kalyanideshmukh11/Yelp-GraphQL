/* eslint-disable no-underscore-dangle */

//const Job = require('../../models/Job');
var express = require('express');
const Customer = require('../../models/Customer');

module.exports = {
  // postJob: async (args, context) => {
  //   try {
  //     const jobs = args.jobInput;

  //     const jobEntry = new Job({
  //       ...jobs,
  //       company: context.req.user._id,
  //       posting_date: new Date()
  //     });
  //     const result = await jobEntry.save();
  //     result._doc.posting_date = new Date(result._doc.posting_date).toISOString().split('T')[0];
	//     return { ...result._doc };
  //   } catch (e) {
  //       return new Error('Unable to post a job. Please try again.');
  //   }
  // },
  // getJobApplicants: async (args, context) => {
  //   try {
  //     const applications = await Job.find({ _id: args.jobId }).select('application -_id');
  //     const students = [];
  
  //     if (applications && applications[0]) {
  //         for( const app of applications[0].application ) {
  //             let student = await Student.find({ _id: app.student });
  //             students.push(student[0]);
  //         }
          
  //         if(students && students.length > 0) {
  //           return students;
  //         }
  //     }
  //     return students ;
  //   } catch (e) {
  //       return new Error('Unable to fetch data.');
  //   }
  // },
  getCustomers: async (args, context) => {
    try {
      const customers = await Customer.find();
      return customers;
    } catch (e) {
       return new Error('Unable to fetch data.');
    }
  },
  updateRestaurantProfile: async(args, context) => {
    try {
      const input = args.restaurantInput;
      const restaurant = await Restaurant.findById(context.req.user._id);      
      restaurant.city = input.city;
      restaurant.state = input.state;
      restaurant.country = input.country;
      const result = await restaurant.save();
      return { ...result._doc };
    } catch (e) {
      console.log(e)
      return new Error('Unable to update the restaurant description. Please try again.');
    }
  },
};
