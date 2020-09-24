import React from 'react';
import { Button } from 'react-bootstrap';

import { MdAddBox } from "react-icons/md";
import './explore-style.css';

function Explore(props) {
    return (
        <div className="post">
            {props.state.employer ? <Button variant="success" onClick={props.postWindow}> Post <MdAddBox className="pl-1 iconPlus" /> </Button> : ''}
        </div>
    );
}

export default Explore;