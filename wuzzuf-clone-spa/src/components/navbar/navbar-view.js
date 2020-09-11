import React from 'react'
import { Container, Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
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
                    <Navbar.Brand href="#home">WUZUUF</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#explore">EXPLORE</Nav.Link>
                        <Nav.Link href="#saved">SAVED</Nav.Link>
                        <Nav.Link href="#applications">APPLICATIONS</Nav.Link>
                    </Nav>
                    <Nav inline>
                        <DropdownButton id="dropdown-basic-button" title="Profile" variant="info">
                            <Dropdown.Item href="#/action-1">Edit info</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}

export { LoggedInNavbarView, MainNavbarView }
