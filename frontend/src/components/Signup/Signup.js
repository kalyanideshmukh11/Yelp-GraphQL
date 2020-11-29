import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Signup extends Component {
    submitHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/student');
    }

    render() {
        return (
            <Container className="m-5 justify-content-center">
                <h1 className="display-4">Let's find your next job</h1><br/>
                <p className="lead">Join Handshake's community of students, schools, and employers to find internships, land a job, and more.</p><br/>
                <p className="lead">.edu email address</p>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" required/>
                    </Form.Group>
                    <Button type="submit">Next</Button>
                </Form>
                <p className="text-muted">Are you an employer?</p>
                <Link to="/company/signup">Sign up here</Link>
            </Container>
        )
    };
};    
            
export default Signup;