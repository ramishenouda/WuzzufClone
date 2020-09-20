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

function LoggedInNavbarView() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/"> <Navbar.Brand>WUZZUF</Navbar.Brand> </Link>
                    <Nav className="mr-auto">
                        <Link to="/explore" className="link">EXPLORE</Link>
                        <Link to="/saved" className="link">SAVED</Link>
                        <Link to="/applications" className="link">APPLICATIONS</Link>
                        <DropdownButton id="dropdown-basic-button" title="Profile" variant="info">
                            <Link to="/editInfo" className="DropdownItem">Edit info</Link>
                            <Link to="/login" className="DropdownItem">Logout</Link>
                            {/* <Dropdown.Item href="#/action-1">Edit info</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item> */}
                        </DropdownButton>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}

export { LoggedInNavbarView, MainNavbarView }
