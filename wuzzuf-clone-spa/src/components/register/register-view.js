import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';

import Country from './countries'
import './register-style.css'

function RegisterEmployerView(props) {
    return (
        <Container>
            <Form className="mt-5">
                <Row>
                    <Col lg="6" md={6} s={12}>
                        <Form.Group>
                            <Form.Label> Name </Form.Label>
                            <Form.Control
                                placeholder="First name"
                                name="firstName"
                                value={props.registerInfo.firstName}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="6" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>   </Form.Label>
                            <Form.Control
                                placeholder="Last name"
                                name="lastName"
                                value={props.registerInfo.lastName}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="6" md={6} s={12}>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={props.registerInfo.email}
                                onChange={props.handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col lg="6" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={props.registerInfo.password}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                placeholder="Company Name"
                                name="companyName"
                                value={props.registerInfo.companyName}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Company Phone</Form.Label>
                            <Form.Control
                                placeholder="Company Phone"
                                name="companyPhone"
                                value={props.registerInfo.companyPhone}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Company Size</Form.Label>
                            <Form.Control
                                as="select"
                                name="companySize"
                                value={props.registerInfo.companySize}
                                onChange={props.handleChange}
                            >
                                <option>Choose a company size</option>
                                <option>1-10 employees</option>
                                <option>11-50 employees</option>
                                <option>51-100 employees</option>
                                <option>101-500 employees</option>
                                <option>501-1000 employees</option>
                                <option>More than 1000 employees</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Form.Label> Company Website </Form.Label>
                            <Form.Control
                                name="companyWebsite"
                                value={props.registerInfo.companyWebsite}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Country
                                value={props.registerInfo.country}
                                handleChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                placeholder="1234 Main St"
                                name="adress"
                                value={props.registerInfo.adress}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="success" type="submit">
                    Join WUZZUF as a Company
                    </Button>
                <Button className="ml-1" onClick={props.toggleEmployer} variant="secondary">
                    Back
                    </Button>
            </Form>
        </Container>
    )
}

function RegisterView(props) {
    return (
        <Container>
            <Form className="mt-5">
                <Row>
                    <Col lg="6" md={6} s={12}>
                        <Form.Group>
                            <Form.Label> Name </Form.Label>
                            <Form.Control
                                placeholder="First name"
                                name="firstName"
                                value={props.registerInfo.firstName}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="6" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>   </Form.Label>
                            <Form.Control
                                placeholder="Last name"
                                name="lastName"
                                value={props.registerInfo.lastName}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="6" md={6} s={12}>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={props.registerInfo.email}
                                onChange={props.handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col lg="6" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={props.registerInfo.password}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                placeholder="1234 Main St"
                                name="adress"
                                value={props.registerInfo.adress}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Country
                                value={props.registerInfo.country}
                                handleChange={props.handleChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg="4" md={6} s={12}>
                        <Form.Group>
                            <Form.Label>Career</Form.Label>
                            <Form.Control
                                as="select"
                                name="career"
                                value={props.registerInfo.career}
                                onChange={props.handleChange}
                            >
                                <option>Choose...</option>
                                <option>Software engineer</option>
                                <option>Marketing</option>
                                <option>Designer</option>
                                <option>Medicine</option>

                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="secondary" type="submit">
                    Register
                    </Button>{' '}
                <Button onClick={props.toggleEmployer} variant="success">
                    Employer?
                </Button>
            </Form>
        </Container>
    );
}

export { RegisterView, RegisterEmployerView }
