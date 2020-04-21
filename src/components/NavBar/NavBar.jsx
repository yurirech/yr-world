import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavBar.scss'

const NavBar = ({route, onRouteChange}) => {

    let changeBackground;
    if (route !== 'home') {
      changeBackground = 'navbar-collapse-purple'
    }

  return (
    <div className='navbar'>
      <Navbar collapseOnSelect>
        <div className='nav-header'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand onClick={() => onRouteChange('home')} className='hide-brand-mobile'>YR</Navbar.Brand>
        </div>
        <Navbar.Collapse className={changeBackground} id="basic-navbar-nav">
          <Nav>
            <Nav.Link eventKey='1' onClick={() => onRouteChange('home')}>Home</Nav.Link>
            <Nav.Link  eventKey='2' onClick={() => onRouteChange('about')}>About</Nav.Link>
            <Navbar.Brand onClick={() => onRouteChange('home')} className='hide-brand-desktop'>YR</Navbar.Brand>
            <Nav.Link eventKey='3' onClick={() => onRouteChange('contact')}>Contact</Nav.Link>
            <Nav.Link eventKey='4' onClick={() => onRouteChange('links')}>Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default NavBar;
