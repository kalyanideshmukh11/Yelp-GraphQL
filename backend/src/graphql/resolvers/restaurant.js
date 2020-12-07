/* eslint-disable no-underscore-dangle */

const Menu = require('../../models/Menu');
var express = require('express');
const Customer = require('../../models/Customer');

module.exports = {
  postMenu: async (args, context) => {
    try {
      const menus = args.menuInput;

      const menuEntry = new Menu({
        ...menus,
       restaurant: context.req.user._id, 
      });
      console.log(menuEntry)
      const result = await menuEntry.save();
	    return { ...result._doc };
    } catch (e) {
        return new Error('Unable to add a menu. Please try again.');
    }
  },
  getOrders: async (args, context) => {
    try {
      const menus=[]
       menus = await Menu.find();
      console.log(menus)
      return menus;
    } catch (e) {
       return new Error('Unable to fetch data.');
    }
  },

  updateRestaurantProfile: async(args, context) => {
    try {
      const input = args.restaurantInput;
      const restaurant = await Restaurant.findById(context.req.user._id);   
      console.log(restaurant)    
      restaurant.city = input.city;
      restaurant.state = input.state;
      restaurant.country = input.country;
      restaurant.phone_number= input.phone_number;
      const result = await restaurant.save();
      return { ...result._doc };
    } catch (e) {
      console.log(e)
      return new Error('Unable to update the restaurant description. Please try again.');
    }
  },

  updateOrder: async(args, context) => {
    try {
      const input = args.orderInput;
      const order = await Menu.findById(context.req.user._id);   
      console.log(order)    
      order.staus = input.status;
      const result = await order.save();
      return { ...result._doc };
    } catch (e) {
      console.log(e)
      return new Error('Unable to update the order. Please try again.');
    }
  },
};
