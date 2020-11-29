import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { addCompanyEmail, addCompanyName, addCompanyPassword, addCity, addState, addCountry, setCompanyError } from './store/action';

class CompanySignup extends Component {
    submitHandler = async (event) => {
        event.preventDefault();
        let data = {
            name: this.props.company_name,
            email: this.props.email,
            password: this.props.password,
            city: this.props.city,
            state: this.props.state,
            country: this.props.country,
        };
        axios.defaults.withCredentials = true;
        axios.post(PATH + "/company/signup", data)
        .then(res => {
            if(res.status == 200){
                //localStorage.setItem('company_name', this.props.first_name);
                this.props.history.push('/company/login');
            }
        })
        .catch(err=>{
            this.props.setCompanyError(err.response.data);
        })
    }

    emailHandler = (event) => {
        this.props.addCompanyEmail(event.target.value);
        this.props.setCompanyError(null);
    }

    passwordHandler = (event) => {
        this.props.addCompanyPassword(event.target.value);
        this.props.setCompanyError(null);
    }

    companyNameHandler = (event) => {
        this.props.addCompanyName(event.target.value);
        this.props.setCompanyError(null);
    }

    cityHandler = (event) => {
        this.props.addCity(event.target.value);
        this.props.setCompanyError(null);
    }

    stateHandler = (event) => {
        this.props.addState(event.target.value);
        this.props.setCompanyError(null);
    }

    countryHandler = (event) => {
        this.props.addCountry(event.target.value);
        this.props.setCompanyError(null);
    }

    render() {
        return (
            <Container className="m-5 d-flex justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Hello! Please enter the below details.</h1>
                    <Form.Group controlId="formGroupCname">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter company name" required onChange={this.companyNameHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">                   
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={this.emailHandler}/>
                    </Form.Group>                    
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" required onChange={this.cityHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter state" required onChange={this.stateHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter country" required onChange={this.countryHandler} />
                    </Form.Group>
                    {this.props.error && <Alert variant="danger">{this.props.error}</Alert>}
                    <Button type="submit">Confirm</Button>
                </Form>
            </Container>            
        )
    };
}

const mapStateToProps = (state) => {
    return {
        company_name: state.signup.company_name,
        email: state.signup.email,
        password: state.signup.company_password,
        city: state.signup.city,
        state: state.signup.state,
        country: state.signup.country,
        error: state.signup.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompanyEmail: (email) => dispatch(addCompanyEmail(email)),
        addCompanyPassword: (password) => dispatch(addCompanyPassword(password)),
        addCompanyName: (company_name) => dispatch(addCompanyName(company_name)),
        addCity: (city) => dispatch(addCity(city)),
        addState: (state) => dispatch(addState(state)),
        addCountry: (country) => dispatch(addCountry(country)),
        setCompanyError: (error) => dispatch(setCompanyError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanySignup);