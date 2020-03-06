import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Navbar>
        <div className='nav-header'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Início</Nav.Link>
            <Nav.Link>Sobre</Nav.Link>
            <Navbar.Brand href="#home">YR</Navbar.Brand>
            <Nav.Link href="#instagram">Contact</Nav.Link>
            <Nav.Link href="#contact">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;
