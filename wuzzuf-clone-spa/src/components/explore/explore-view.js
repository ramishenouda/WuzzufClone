import React from 'react';
import { Button } from 'react-bootstrap';
import { MdAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';

import './explore-style.css';

function Explore(props) {
    return (
        <div className="post">
            {props.state.employer ?
                <>
                    <Link to="/post">
                        <Button variant="success"> Post <MdAddBox className="pl-1 iconPlus" /> </Button>
                    </Link>
                </>
                : ''}
        </div>
    );
}

export default Explore;