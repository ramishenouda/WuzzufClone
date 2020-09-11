import React from 'react'
import './navbar-style.css'
import { Container, Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function mainNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/"> <Navbar.Brand>WUZZUF</Navbar.Brand> </Link>
                    <Nav className="mr-auto">
                        <Link to="/jobs" className="link">Browse Jobs</Link>
                    </Nav>
                    <Nav>{/*kan fe hena inline*/}
                        <Link to="/login" className="link">Login</Link>
                        <Link to="/register" className="link">Join Now</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

function loggedInNavbar() {
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

export default mainNavbar
export {
    loggedInNavbar
}
