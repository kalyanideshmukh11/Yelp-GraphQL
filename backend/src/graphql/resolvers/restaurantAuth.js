/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../config');

const Restaurant = require('../../models/restaurant');

module.exports = {
  restaurantSignUp: async (args) => {
    try {
      console.log(args)
      let userRestaurant = await Restaurant.findOne({
        email: args.restaurantSignUpInput.email,
      });

      if (userRestaurant) {
        return new Error('Email already exists! Please sign in or create a new account.');
      }
      userRestaurant = new Restaurant({
        ...args.restaurantSignUpInput,
      });
      const salt = await bcrypt.genSalt(10);

      userRestaurant.password = await bcrypt.hash(userRestaurant.password, salt);
      const result = await userRestaurant.save();
      console.log("result",result)
      return { ...result._doc };
    } catch (e) {
      return new Error('Unable to sign up. Please try again.');
    }
  },
  restaurantLogin: async (args, context) => {
    try {
      const { email, password } = args.restaurantLoginInput;
      const userRestaurant = await Restaurant.findOne({
        email,
      });
      if (!userRestaurant) {
        return new Error('User not found.');
      }

      const isMatch = await bcrypt.compare(password.toString(), userRestaurant.password);
      if (!isMatch) {
        return new Error('Invalid Credentials. Please try again.');
      }
      const payload = {
        user: {
          _id: userRestaurant._id,
          email: userRestaurant.email,
          first_name: userRestaurant.name,
        },
      };
      const token = jwt.sign(
        payload,
        config.JWTPASSWORD,
        {
          expiresIn: 360000,
        }
      );
      context.res.cookie('token', token, { maxAge: 900000, httpOnly: false, path: '/' });
      return { userId: userRestaurant._id, token, tokenExpiration: 360000 };
    } catch (e) {
      return new Error('Unable to log in. Please try again.');
    }
  },
};;