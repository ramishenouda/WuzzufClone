import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './jobPage-style.css'

function JobPage(props) {
    const state = props.state
    return(
        <Container className="job-page">
            <div className="content-card">
                <Row>
                    <Col lg={9} md={8}>
                        <h2>{state.title}</h2>
                    </Col>
                    
                    <Col lg={3} md={4}>
                        <Image src="https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Digital-Cloud-Platforms-Egypt-41008-1552924240-sm.png"/>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default JobPage;