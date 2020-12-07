import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import CustomerSignup from './components/Signup/CustomerSignup';
// import RestaurantSignup from './components/Signup/RestaurantSignup';
// import RestaurantLogin from './components/Login/RestaurantLogin';
// import Profile from './containers/Profile/profile';
// import Logout from './components/Logout/logout';
// import Dashboard from './containers/Dashboard/dashboard';
// import Customer from './containers/Customer/customer';
// import RestaurantProfile from './containers/RestaurantProfile/restaurant-profile';
// import RestaurantDashboard from './containers/RestaurantDashboard/restaurant-dashboard';
import { connect } from 'react-redux';
import customerLogin from './components/Login/customerLogin';
class Main extends Component {

    render() {
        let routes = (
            <Switch>                
                <Route path="/login" component={Login} />
                
                <Route path="/signup" component={Signup} />
                <Route path="/customer" component={CustomerSignup} />
                
                <Redirect to='/' />
                <Route path="/login/customer" component={customerLogin} />
            </Switch>           
        );
    

        return (
            <div>
                {routes}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.token !== null 
    }
};

export default connect(mapStateToProps)(Main);


/*
        if(localStorage.getItem('token')){
            routes = (
                <Switch>                               
                    <Route path="/profile" component={Profile} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/application" component={Application} />
                    <Route path="/customer" component={Customer} />
                    <Route path="/restaurantprofile" component={RestaurantProfile} />
                    <Route path="/restaurant/dashboard" component={RestaurantDashboard} />
                    <Redirect to='/' />
                </Switch>
            );
        }
*/