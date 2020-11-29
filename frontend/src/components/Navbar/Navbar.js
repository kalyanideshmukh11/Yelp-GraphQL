import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/new-handshake-logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">                
                <Nav className="mr-auto">
                    <Navbar.Brand href="#"><img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Handshake</Navbar.Brand>                    
                    {localStorage.getItem('token') && localStorage.getItem('user') === 'student' && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
                    {localStorage.getItem('token') && localStorage.getItem('user') === 'student' && <Nav.Link href="/application">Applications</Nav.Link>}
                    {localStorage.getItem('token') && localStorage.getItem('user') === 'student' && <Nav.Link href="/event">Events</Nav.Link>}
                    {localStorage.getItem('token') && localStorage.getItem('user') === 'student' && <Nav.Link href="/student">Students</Nav.Link>}
                    {localStorage.getItem('token') && localStorage.getItem('user') === 'company' && <Nav.Link href="/company/dashboard">Dashboard</Nav.Link>}
                    {localStorage.getItem('token') && localStorage.getItem('user') === 'company' && <Nav.Link href="/company/student">Students</Nav.Link>}
                    {localStorage.getItem('token') && localStorage.getItem('user') === 'company' && <Nav.Link href="/company/event">Events</Nav.Link>}
                    {localStorage.getItem('token') && <Nav.Link href="/inbox">Messages</Nav.Link>}
                </Nav>
                {!localStorage.getItem('token') && <Link to='/login'>Sign In</Link>}
                {!localStorage.getItem('token') && <Link className="pl-5" to='/signup'>Sign Up</Link>}
                {localStorage.getItem('token') &&
                <NavDropdown title={"User"} id="collasible-nav-dropdown">
                    <NavDropdown.Item href={localStorage.getItem('user') === 'student' ? "/profile" : "/companyprofile"}>Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Sign Out</NavDropdown.Item>
                </NavDropdown>}
            </Navbar>
        );
    };
};

// const mapStateToProps = (state) => {
//     return {
//         user: state.nav.user
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addEmail: (email_id) => dispatch(addEmail(email_id)),
//         addPassword: (password) => dispatch(addPassword(password)),
//         authSuccess: (token) => dispatch(authSuccess(token)),
//         authFail: (error) => dispatch(authFail(error))
//     }
// };
 
export default withRouter(connect(null)(Navigation));