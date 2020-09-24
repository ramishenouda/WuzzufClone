import React from 'react'
import { Container, Navbar, Nav, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './navbar-style.css'

function MainNavbarView() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/"> <Navbar.Brand>WUZZUF</Navbar.Brand> </Link>
                    <Nav className="mr-auto">
                        <Link to="/jobs" className="link">Browse Jobs</Link>
                    </Nav>
                    <Nav>
                        <Link to="/login" className="link">Login</Link>
                        <Link to="/register" className="link">Join Now</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

function LoggedInNavbarView(props) {
    let form;

    if (props.isSmallScreen) {
        form = (
            <div className="nav">
                <Navbar className="upper-nav" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>WUZZUF</Navbar.Brand>
                        <ul>
                            <li>
                                <Link to="/editInfo" className="link green">Edit info</Link>
                            </li>
                            <li>
                                <Link to="/login" className="link red">Logout</Link>
                            </li>
                        </ul>
                    </Container>
                </Navbar>
                <Navbar className="lower-nav">
                   <Container>
                    <ul>
                            <li>
                                <Link to="/explore" className="link">EXPLORE</Link>
                            </li>
                            <li>
                                <Link to="/saved" className="link">SAVED</Link>
                            </li>
                            <li>
                                <Link to="/applications" className="link">APPLICATIONS</Link>
                            </li>
                        </ul>
                   </Container>
                </Navbar>
            </div>
        );
    } else {
        form = (
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>WUZZUF</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/explore" className="link">EXPLORE</Link>
                        <Link to="/saved" className="link">SAVED</Link>
                        <Link to="/applications" className="link">APPLICATIONS</Link>
                    </Nav>
                    <DropdownButton id="dropdown-basic-button" title="Profile" variant="info">
                        <Link to="/editInfo" className="DropdownItem">Edit info</Link>
                        <Link to="/login" className="DropdownItem">Logout</Link>

                    </DropdownButton>
                </Container>
            </Navbar>
        );
    }
    return (
        form
    )
}

export { LoggedInNavbarView, MainNavbarView }
