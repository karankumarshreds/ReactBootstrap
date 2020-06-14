import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import './Scrollspy.css';

const Scrollspy = (props) => {
    return (
        <div>
            <Navbar className="menu-nav"id="mainNavbar" role="tablist">
                <Nav className="mr-auto nav-pills">
                    <div className="container">
                    <NavItem>
                        <Nav.Link className="nav-link" href="#Chinese">Chinese</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link className="nav-link"  href="#Indian">Indian</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link className="nav-link" href="#American">American</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link className="nav-link" href="#Italian">Italian</Nav.Link>
                    </NavItem>
                    </div>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Scrollspy;