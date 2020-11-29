const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Customer {
  _id: ID!
  first_name: String!
  last_name: String!
  email: String!
  password: String!
  user: String!
}

type AuthData {
  userId: ID
  token: String
  tokenExpiration: Int
}

input CustomerSignUp {
  first_name: String!
  last_name: String!
  email: String!
  password: String!
}

type Restaurant {
    _id: ID!
    name: String!
    email: String!
    password: String!
    city: String!
    state: String!
    country: String!
    phone_number: String
}

input RestaurantSignUp {
    name: String!
    email: String!
    password: String!
    city: String!
    state: String!
    country: String!
}

input RestaurantInput {
    name: String
    email: String
    password: String
    city: String
    state: String
    country: String
    phone_number: String
}

input CustomerInput {
    first_name: String
    last_name: String
    email: String
}

input UserLogin {
    email: String!
    password: String!
}  

input CustomerLogin {
  email: String!
  password: String!
}


type RootQuery {
  getCustomers: [Customer]!
  getAllCustomers: [Customer]!
}

type RootMutation {
  customerLogin(customerLoginInput: CustomerLogin!): AuthData!
  restaurantLogin(restaurantLoginInput: UserLogin!): AuthData!
  customerSignUp(customerInput: CustomerSignUp): Customer
  restaurantSignUp(restaurantSignUpInput: RestaurantSignUp): Restaurant
  updateRestaurantProfile(restaurantInput: RestaurantInput): Restaurant!
  updateCustomerProfile(customerInput: CustomerInput): Customer!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);