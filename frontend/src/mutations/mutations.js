import { gql } from 'apollo-boost';

const customerLoginMutation = gql`
    mutation {
        customerLogin($email: String, $password: String) {
            email: $email
            password: $password
        }{
            userId,
            token
        }
    } 
`;

const restaurantLoginMutation = gql`
    mutation {
        restaurantLogin($email: String, $password: String) {
            email: $email
            password: $password
        }{
            userId
            token
        }
    }    
`;

const customerSignupMutation = gql`
    mutation {
        customerSignUp($first_name: String, $last_name: String, $email: String, $password: String){
            first_name: $first_name
            last_name: $last_name
            email: $email
            password: $password
        }{
            first_name
            last_name
            email
        }
    }    
`;

const restaurantSignupMutation = gql`
    mutation {
        restaurantSignUp($name: String, $email: String, $password: String, $city: String, $state: String, $country: String){
            name: $name
            email: $email
            password: $password
            city: $city
            state: $state
            country: $country
        }{
            name
            email
            city
            state
            country
        }
    }    
`;

const postMenuMutation = gql`
    mutation {
        postMenu($name: String, $description: String, $price: Number, $ingredient: String, $description: String, $category: String) {
            name: $name
            description: $description
            price: $price
            ingredient: $ingredient
            description: $description
            category: $category
        }{
            name
            posting_date
            ingredient
            price
            description
            category
        }
    }    
`;

const updateRestaurantProfileMutation = gql`
    mutation {
        updateCompanyProfile($city: String, $state: String, $country: String){
            city: $city
            state: $state
            country: $country
        }{
            name
            email
            city
            state
            country
        }
    }
`;

const updateCustomerProfileMutation = gql`
    mutation {
        updateStudentProfile($about_me: String){
            about_me: $about_me
        }{
            first_name
            last_name
            email
            college_name
            career_objective
            about_me
        }
    }    
`;

const placeMenuOrderMutation = gql`
    mutation {
        placeOrder($menuId: String){
            menuId: $menuId
        }{
            customer
            applied_date
            status
        }
    }    
`;

export { customerLoginMutation, restaurantLoginMutation, customerSignupMutation, restaurantSignupMutation, postMenuMutation, updateRestaurantProfileMutation, updateCustomerProfileMutation, placeMenuOrderMutation };