import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './form-style.css'
import Country from './countries'
import {Container, Form, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegisterEmployer(props) {
    return(
        <div>
            <Container>
                <Form className="mt-5">
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstname">
                            <Form.Label> Name </Form.Label>
                            <Form.Control 
                            placeholder="First name" 
                            name="firstName"
                            value={props.registerInfo.firstName}
                            
                            onChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lastname">
                            <Form.Label>   </Form.Label>
                            <Form.Control 
                            placeholder="Last name"
                            name="lastName"
                            value={props.registerInfo.lastName}
                            onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name="email"
                            value={props.registerInfo.email}
                            onChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={props.registerInfo.password}
                            onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="companyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control 
                            placeholder="Company Name" 
                            name="companyName"
                            value={props.registerInfo.companyName}
                            onChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="companyPhone">
                            <Form.Label>Company Phone</Form.Label>
                            <Form.Control 
                            placeholder="Company Phone" 
                            name="companyPhone"
                            value={props.registerInfo.companyPhone}
                            onChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="companySize">
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
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="companyWebsite">
                            <Form.Label> Company Website </Form.Label>
                            <Form.Control 
                                name="companyWebsite"
                                value={props.registerInfo.companyWebsite}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="companyCountry"> 
                            <Country 
                            value={props.registerInfo.country}
                            handleChange={props.handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="adress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                            placeholder="1234 Main St" 
                            name="adress"
                            value={props.registerInfo.adress}
                            onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="success" type="submit">
                        Join WUZZUF as a Company
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

function Register(props) {
    return (
        <div>
            <Container>
                <Form className="mt-5">
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstname">
                            <Form.Label> Name </Form.Label>
                            <Form.Control 
                            placeholder="First name" 
                            name="firstName"
                            value={props.registerInfo.firstName}
                            onChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lastname" >
                            <Form.Label>   </Form.Label>
                            <Form.Control 
                            placeholder="Last name" 
                            name="lastName" 
                            value={props.registerInfo.lastName}
                            onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name="email"
                            value={props.registerInfo.email}
                            onChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={props.registerInfo.password}
                            onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="adress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                            placeholder="1234 Main St" 
                            name="adress"
                            value={props.registerInfo.adress}
                            onChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCountry">
                            <Country 
                            value={props.registerInfo.country}
                            handleChange={props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
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
                    </Form.Row>

                    <Button variant="secondary" type="submit">
                        Register
                    </Button>{' '}
                    <Link to="/RegisterEmployer">
                        <Button variant="success">
                            Employer?
                        </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );
}
export default Register
export {
    RegisterEmployer
}
