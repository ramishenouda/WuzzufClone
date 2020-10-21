import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { GoVerified } from 'react-icons/go';

import './jobPage-style.css'

function JobPage(props) {
    const state = props.state
    return (
        <Container className="job-page">
            <Row>
                <Col md={9} xs={12}>
                    <div className="content-card">
                        <Row>
                            <Col lg={9} md={8} className="title">
                                <h3>{state.title}</h3>
                            </Col>

                            <Col lg={3} md={4}>
                                <Image src="https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Digital-Cloud-Platforms-Egypt-41008-1552924240-sm.png" />
                            </Col>
                        </Row>

                        <p className="companyName">{state.companyName} <GoVerified className="verified" /></p>
                        <p className="text-muted">Posted {state.jobDate}</p>

                        <div className="applyInfo">
                            <Row>
                                <Col lg={4} xs={12} className="borderR buttonApply">
                                    <Button className="btn-Apply"> Apply to Job </Button>
                                </Col>

                                <Col lg={3} xs={12} className="applicants borderR">
                                    <span className="num"> {state.applicants} </span>
                                    <p>
                                        Applicants for {state.vacancies} open position
                                    </p>
                                </Col>

                                <Col lg={5} xs={12} className="stats">
                                    <div className="stat">
                                        <div className="applicants-num"> {state.viewed} </div>
                                        <div className="applicants-desc"> Viewed </div>
                                    </div>
                                    <div className="stat">
                                        <div className="applicants-num"> {state.consideration} </div>
                                        <div className="applicants-desc" style={{ color: 'green' }}> In Consideration </div>
                                    </div>
                                    <div className="stat">
                                        <div className="applicants-num"> {state.notSelected} </div>
                                        <div className="applicants-desc" style={{ color: 'red' }}> Not Selected </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>

                    <div className="content-card">
                        <div className="job-summary">
                            <Row>
                                <Col md={4} xs={12} className="summary-top">
                                    <p className="requirement">Experience Needed:</p>
                                    <p className="requirement-content"> {state.experienceNeeded} </p>
                                </Col>
                                <Col md={4} xs={12} className="summary-top">
                                    <p className="requirement">Career Level:</p>
                                    <p className="requirement-content"> {state.careerLevel} </p>
                                </Col>
                                <Col md={4} xs={12} className=" summary-top last">
                                    <p className="requirement">Job Type:</p>
                                    <p className="requirement-content"> {state.jobType} </p>
                                </Col>
                            </Row>

                            <Row className="bottom">
                                <Col md={4} xs={12} className="summary-bottom">
                                    <p className="requirement">Salary:</p>
                                    <p className="requirement-content"> {state.salary} </p>
                                </Col>
                                <Col md={4} xs={12} className="summary-bottom">
                                    <p className="requirement">Education Level:</p>
                                    <p className="requirement-content"> {state.educationLevel} </p>
                                </Col>
                                <Col md={4} xs={12} className="summary-bottom last">
                                    <p className="requirement">Vacancies:</p>
                                    <p className="requirement-content"> {state.vacancies} open position</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="job-roles">
                            <p className="requirement">Job Roles:</p>
                            <p className="requirement-content"> {state.jobRoles.join("/")} </p>
                        </div>
                        <div className="job-about">
                            <p className="requirement">About the Job</p>
                            <p className="requirement-content"> {state.jobAbout} </p>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="job-requirements">
                            <div className="card-title">
                                Job Requirements
                            </div>
                            <p className="requirement-content">{state.jobRequirements}</p>
                        </div>
                        
                        <div className="job-keywords">
                            <div className="card-title">
                                Keywords:
                            </div>
                            <Row className="keywords-content">
                                {
                                    state.keywords.map( keyword => (
                                        <Col key={keyword.toString()} lg={3} md={4} xs={6} className="keyword">
                                            {keyword}
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </div>
                </Col>

                <Col md={3} xs={12}>
                    <h1>Ads Coming soon...</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default JobPage;
