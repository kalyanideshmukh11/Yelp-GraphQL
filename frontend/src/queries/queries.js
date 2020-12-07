import { gql } from 'apollo-boost';

const getAllRestaurantsQuery = gql`
    query {
        getAllRestaurants{
            _id
            name
            email
            password
            city
            state
            country
            phone_number
        }
    }    
`;

const getOrdersQuery = gql`
    query {
        getOrders{
            _id
            customer
            order_date
            status
        }
    }    
`;
const searchMenusQuery = gql`
    query {
        searchMenus(name: $name){
            name
            ingredient
            category
            description
            price
            restaurant
        }
    }
`;

export { getAllRestaurantsQuery, getOrdersQuery,  searchMenusQuery };