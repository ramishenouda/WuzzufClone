import React from 'react';
import { Container, Row, Col, Image, Form, Media, Button } from 'react-bootstrap';

import Country from '../register/countries';

import './profile-style.css';

function Profile(props) {

    return (
        <div className="profile mt-5">
            <Container>
                <Row>
                    <Col className="left" lg="4" md={6} s={12}>
                        <Media>
                            <Image
                                width={100}
                                height={100}
                                className="mr-3"
                                src="https://scontent.fcai21-1.fna.fbcdn.net/v/t1.0-9/90018423_2598665993743519_8099621696719290368_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=FCaJJGq63BsAX86ukWC&_nc_ht=scontent.fcai21-1.fna&oh=3e71e91cd39985b327b9e6ec01c35697&oe=5F8A0846"
                                alt="Profile pic"
                                roundedCircle
                            />
                            <Media.Body>
                                <Form.File>
                                    <Form.File.Label>Upload your photo</Form.File.Label>
                                    <Form.File.Input />
                                </Form.File>
                            </Media.Body>
                        </Media>

                        <div className="info mt-5 text-center">
                            <p> {props.ProfileInfo.firstName} {props.ProfileInfo.lastName} </p>
                            <p> {props.ProfileInfo.email} </p>
                            {
                                props.ProfileInfo.employer === false ? <p> {props.ProfileInfo.career} </p> : ''
                            }
                            <p> {props.ProfileInfo.country} </p>
                        </div>
                    </Col>

                    <Col className="right" lg="6" md={6}  s={12}>

                        <div className="personalInfo">

                            <h4>Your Personal Info</h4>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label> First Name </Form.Label>
                                    <Form.Control
                                        name="firstName"
                                        value={props.ProfileInfo.firstName}
                                        onChange={props.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label> Last Name</Form.Label>
                                    <Form.Control
                                        name="lastName"
                                        value={props.ProfileInfo.lastName}
                                        onChange={props.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <div className="gender mt-3">
                                <h5>Gender</h5>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label={`Male`}
                                    name="gender"
                                    value="Male"
                                    onChange={props.handleChange}
                                    defaultChecked={props.ProfileInfo.gender === "Male" ? true : ''}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="gender"
                                    label={`Female`}
                                    value="Female"
                                    onChange={props.handleChange}
                                    defaultChecked={props.ProfileInfo.gender === "Female" ? true : ''}
                                />
                            </div>

                            <div className="marital mt-3">
                                <h5>Marital Status</h5>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label={`Unspecified`}
                                    name="marital"
                                    value="Unspecified"
                                    onChange={props.handleChange}
                                    defaultChecked={props.ProfileInfo.maritalStatus === "Unspecified" ? true : ''}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label={`Single`}
                                    name="marital"
                                    value="Single"
                                    onChange={props.handleChange}
                                    defaultChecked={props.ProfileInfo.maritalStatus === "Single" ? true : ''}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label={`Married`}
                                    name="marital"
                                    value="Married"
                                    onChange={props.handleChange}
                                    defaultChecked={props.ProfileInfo.maritalStatus === "Married" ? true : ''}
                                />
                            </div>
                        </div>

                        {
                            props.ProfileInfo.employer === false ? '' :
                            <div className="companyInfo mt-3">
                            <h4> Company Info </h4>
                                <Row>
                                    <Col lg="6" md={12}>
                                        <Form.Group>
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control
                                                placeholder="Company Name"
                                                name="companyName"
                                                value={props.ProfileInfo.companyName}
                                                onChange={props.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col lg="6" md={12}>
                                        <Form.Group>
                                            <Form.Label>Company Phone</Form.Label>
                                            <Form.Control
                                                placeholder="Company Phone"
                                                name="companyPhone"
                                                value={props.ProfileInfo.companyPhone}
                                                onChange={props.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg="6" md={12}>
                                        <Form.Group >
                                            <Form.Label>Company Size</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="companySize"
                                                value={props.ProfileInfo.companySize}
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

                                    <Col lg="6" md={12}>
                                        <Form.Group >
                                            <Form.Label> Company Website </Form.Label>
                                            <Form.Control
                                                name="companyWebsite"
                                                value={props.ProfileInfo.companyWebsite}
                                                onChange={props.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        }

                        <div className="location mt-3">
                            {
                                props.ProfileInfo.employer === false ? <h4>Your Location</h4> : <h4>Company Location</h4>
                            }
                            <Row>
                                <Col lg="6" md={12}>
                                    <Country
                                        value={props.ProfileInfo.country}
                                        handleChange={props.handleChange}
                                    />
                                </Col>

                                <Col lg="6" md={12}>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            placeholder="1234 Main St"
                                            name="adress"
                                            value={props.ProfileInfo.adress}
                                            onChange={props.handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                        <div className="about">
                            <label>Enter value : </label>
                            <textarea
                                col="50"
                                row="50"
                                name="about"
                                value={props.about}
                                onChange={props.handleChange}
                            />
                        </div>
                        <Button variant="primary" className="mt-5 mb-3 center" >Save Changes</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;