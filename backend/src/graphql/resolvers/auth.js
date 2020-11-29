/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../config');

const Customer = require('../../models/Customer');

module.exports = {
  customerSignUp: async (args) => {
    try {
      let userCustomer = await Customer.findOne({
        email: args.customerInput.email,
      });

      if (userCustomer) {
        return new Error('Email already exists! Please sign in or create a new account.');
      }
      userCustomer = new Customer({
        ...args.customerInput,
      });
      const salt = await bcrypt.genSalt(10);

      userCustomer.password = await bcrypt.hash(userCustomer.password, salt);
      const result = await userCustomer.save();
      return { ...result._doc };
    } catch (e) {
      return new Error('Unable to sign up. Please try again.');
    }
  },
  customerLogin: async (args, context) => {
    const { email, password } = args.customerLoginInput;
    try {
      const userCustomer = await Customer.findOne({
        email,
      });
      if (!userCustomer) {
        return new Error('User not found.');
      }

      const isMatch = await bcrypt.compare(password.toString(), userCustomer.password);
      if (!isMatch) {
        return new Error('Invalid Credentials. Please try again.');
      }
      const payload = {
        user: {
          _id: userCustomer._id,
          email: userCustomer.email,
          first_name: userCustomer.first_name,
          user: userCustomer.user,
        },
      };
      const token = jwt.sign(
        payload,
        config.JWTPASSWORD,
        {
          expiresIn: 360000,
        },
      );
      context.res.cookie('token', token, { maxAge: 900000, httpOnly: false, path: '/' });
      return { userId: userCustomer._id, token, tokenExpiration: 360000 };
    } catch (e) {
      return new Error('Unable to log in. Please try again.');
    }
  },
};