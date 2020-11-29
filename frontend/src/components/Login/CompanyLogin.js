import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCompanyLoginEmail, addCompanyLoginPassword, authCompanySuccess, authCompanyFail} from './store/action';
import { PATH } from '../../config';

class CompanyLogin extends Component {
    submitHandler = async (event) => {
        event.preventDefault();
        const data = {
            email: this.props.company_email,
            password: this.props.company_password
        }
        axios.defaults.withCredentials = true;
        axios.post(PATH + "/company/login", data)
        .then(res => {
            if(res.status === 200){
                this.props.authCompanySuccess(res.data.company.responseMessage.token);
                localStorage.setItem("user", res.data.company.responseMessage.user);
                this.props.history.push('/company/dashboard');
            }
        })
        .catch(err=>{
            this.props.authCompanyFail(err.response.data.msg);
        })
    }

    emailHandler = (event) => {
        this.props.addCompanyLoginEmail(event.target.value);
    }

    passwordHandler = (event) => {
        this.props.addCompanyLoginPassword(event.target.value);
    }

    render() {
        return (
            <Container className="m-5 d-flex justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Hello! Enter details below to sign in to your account.</h1>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={this.emailHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    {this.props.error && <Alert variant="danger">{this.props.error}</Alert>}
                    <Button type="submit">Sign in</Button>
                </Form>
            </Container>            
        )
    };
};

const mapStateToProps = (state) => {
    return {
        company_email: state.login.company_email,
        company_password: state.login.company_password,
        error: state.login.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompanyLoginEmail: (email) => dispatch(addCompanyLoginEmail(email)),
        addCompanyLoginPassword: (password) => dispatch(addCompanyLoginPassword(password)),
        authCompanySuccess: (token) => dispatch(authCompanySuccess(token)),
        authCompanyFail: (error) => dispatch(authCompanyFail(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLogin);