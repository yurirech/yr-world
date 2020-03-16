import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Navbar >
        <div className='nav-header'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" className='hide-brand-mobile'>YR</Navbar.Brand>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Navbar.Brand href="#home" className='hide-brand-desktop'>YR</Navbar.Brand>
            <Nav.Link href="#instagram">Contact</Nav.Link>
            <Nav.Link href="#contact">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default NavBar;
