const customerAuthResolver = require('./auth');
const restaurantAuthResolver = require('./restaurantAuth');
const restaurantResolver = require('./restaurant');
const customerResolver = require('./customer');

const rootResolver = {
  ...customerAuthResolver,
  ...restaurantAuthResolver,
  ...restaurantResolver,
  ...customerResolver,
};

module.exports = rootResolver;