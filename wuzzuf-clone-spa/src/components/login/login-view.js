import React from 'react';
import {Container, Form, Button } from 'react-bootstrap';

import './login-style.css'

function Login(props) {
    return (
        <div className="login">
            <Container className="mt-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Login
