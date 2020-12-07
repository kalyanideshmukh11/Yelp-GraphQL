const Menu = require('../../models/Menu');
var express = require('express');
const Restaurant =require('../../models/restaurant')

module.exports = {
    searchMenus: async (args, context) => {
        try {
          const menus = await Menu.find();
          console.log(menus)
          console.log(args)
          return menus.filter(menu => menu.name.includes(args.name)).map(menu => {
              return {
                ...menu._doc,
              }
          });
        } catch (e) {
            return new Error('Unable to fetch data.');
        }
    },
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
    getAllRestaurants: async (args, context) => {
      try {
          const restaurants = await Restaurant.find();
          return restaurants;
      } catch (e) {
          return new Error('Unable to fetch data.');
      }
  },
    placeMenuOrder: async (args, context) => {
        const { menuId } = args.placeOrderInput;
        const menu = await Menu.findById(menuId);
        //const customer = context.req.user._id;
        const customer= "5fcde2320e2146512883ae43"
        try {
          const order = {
            customer,
            order_date: new Date(),
            status: 'Pending'
          };
          menu.order.unshift(order);
          await menu.save();
          order.order_date = new Date(order.order_date).toISOString().split('T')[0];
          return order;
        } catch (e) {
          return new Error('Unable to apply job. Please try again.');
        }
    }, 
};
