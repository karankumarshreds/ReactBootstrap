import React, { useState } from 'react';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      <Navbar expand="md">
        <Navbar.Brand href="#home">HungerBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search..." className="mr-sm-2 search" />
            <Nav.Link className="search-button">Kill hunger!</Nav.Link>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
export default Example;