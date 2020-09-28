import React from 'react';
import Select from 'react-select';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './post-style.css'

function Post(props) {
    const state = props.state

    return (
        <div className="post mt-5">
            <Container>
                <Form>
                    <Row>
                        <Col lg="4" md={6} s={12}>
                            <Form.Control
                                className="mb-3"
                                name="title"
                                placeholder="Title"
                                value={state.title}
                                onChange={props.handleChange}
                            />
                        </Col>

                        <Col lg="4" md={6} s={12}>
                            <Form.Control
                                className="mb-3"
                                name="salary"
                                placeholder="Salary"
                                value={state.salary}
                                onChange={props.handleChange}
                            />
                        </Col>

                        <Col lg="4" md={6} s={12}>
                            <Select
                                className="mb-3"
                                name="jobType"
                                placeholder="Job Type"
                                options={props.options}
                                components={props.animatedComponents}
                                isMulti
                            />
                        </Col>

                        <Col lg="4" md={6} s={12}>
                            <Select
                                className="mb-3"
                                name="jobRoles"
                                placeholder="Job Roles"
                                options={props.options}
                                components={props.animatedComponents}
                                isMulti
                            />
                        </Col>

                        <Col lg="4" md={6} s={12}>
                            <Select
                                className="mb-3"
                                name="careerLevel"
                                placeholder="Career Level"
                                options={props.options}
                                components={props.animatedComponents}
                                isMulti
                            />
                        </Col>

                        <Col lg="4" md={6} s={12}>
                            <Select
                                className="mb-3"
                                name="keyWords"
                                placeholder="keyWords"
                                options={props.options}
                                components={props.animatedComponents}
                                isMulti
                            />
                        </Col>

                        <Col lg="12">
                            <Form.Control
                                as="textarea"
                                className="mb-3"
                                placeholder="Job Requirements"
                                name="jobRequirements"
                                rows={3}
                                value={state.jobRequirements}
                                onChange={props.handleChange}
                            />
                        </Col>

                        <Col lg="12">
                            <Form.Control
                                as="textarea"
                                className="mb-3"
                                name="about"
                                placeholder="About"
                                rows={5}
                                value={state.about}
                                onChange={props.handleChange}
                            />
                        </Col>
                    </Row>

                    <Button variant="success" type="submit" className="mr-3">
                        Post
                    </Button>

                    <Link to="/explore">
                        <Button variant="danger"> Cancel </Button>
                    </Link>
                </Form>
            </Container>

            {/* <Select
                    name="jobRoles"
                    value={props.state.jobRoles}
                    onChange={props.handleChange}
                    options={options}
                    isMulti
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={options[1]}
                    isClearable={options[0]}
                /> */}
        </div>
    )
}

export default Post;