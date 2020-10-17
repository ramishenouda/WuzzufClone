import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { GoVerified } from 'react-icons/go';

import './jobPage-style.css'

function JobPage(props) {
    const state = props.state
    return (
        <Container className="job-page">
            <Row>
                <Col md={8} xs={12}>
                    <div className="content-card">
                        <Row>
                            <Col lg={9} md={8}  className="title">
                                <h3>{state.title}</h3>
                            </Col>

                            <Col lg={3} md={4}>
                                <Image src="https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Digital-Cloud-Platforms-Egypt-41008-1552924240-sm.png"  />
                            </Col>
                        </Row>

                        <p className="companyName">{state.companyName} <GoVerified className="verified" /></p>
                        <p className="text-muted">Posted {state.jobDate}</p>

                        <div className="applyInfo">
                            <Row>
                                <Col lg={4}  xs={12} className="borderR buttonApply">
                                    <Button className="btn-Apply"> Apply to Job </Button>
                                </Col>

                                <Col lg={3}  xs={12} className="applicants borderR">
                                    <span className="num"> {state.applicants} </span>
                                    <p>
                                        Applicants for {state.openPosition} open position
                                    </p>
                                </Col>

                                <Col lg={5} xs={12} className="stats">
                                    <div className="stat">
                                        <div className="applicants-num"> {state.viewed} </div>
                                        <div className="applicants-desc"> Viewed </div>
                                    </div>
                                    <div className="stat">
                                        <div className="applicants-num"> {state.consideration} </div>
                                        <div className="applicants-desc" style={{color:'green'}}> In Consideration </div>
                                    </div>
                                    <div className="stat">
                                        <div className="applicants-num"> {state.notSelected} </div>
                                        <div className="applicants-desc" style={{color:'red'}}> Not Selected </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </div>
                </Col>

                <Col md={4} xs={12}>
                    <h1>Hello, how are you! hehehehehe</h1>
                </Col>
                {
                    console.log(state.screenWidth)
                }
            </Row>
        </Container>
    );
}

export default JobPage;