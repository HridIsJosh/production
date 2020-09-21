import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/formcontrol';
import './Nav.css';

function Navigation() {
  return (
    <Navbar className='color-nav' variant='dark' expand='lg'>
      <Navbar.Brand href='/'>Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/Projects'>Projects</Nav.Link>
          <Nav.Link href='/Contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
