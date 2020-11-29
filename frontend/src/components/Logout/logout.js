import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogout } from './store/action';

class Logout extends Component {
    componentDidMount() {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
    
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
        this.props.history.push('/');
    }

    render() {
        return (
            <div></div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authLogout: () => dispatch(authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);