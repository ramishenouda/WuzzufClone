import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './explore-style.css';

function ExploreItem(props) {
    return (
        <Card className="mt-3">
            <Card.Header as="h5"> {props.data.header} </Card.Header>
            <Card.Body>
                <Card.Title as="h6"> {props.data.title} </Card.Title>
                <Card.Text> {props.data.body} </Card.Text>
                {
                    !props.state.employer ?
                        <>
                            <Button className="mr-3" variant="primary" id="apply" onClick={props.applyJob}>Apply</Button>
                            <Button variant="success" id="save" onClick={props.applyJob}>Save</Button>
                        </> : ''
                }
            </Card.Body>
        </Card>
    )
}

export default ExploreItem;