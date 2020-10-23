import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';



const Header = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <div className="container">
        <Navbar.Brand href="/">Expert Finder</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user-profile">Profile</Nav.Link>
            <Nav.Link href="/search">Search Profiles</Nav.Link>
          </Nav>
          <Nav>
          <GoogleAuth />
          </Nav>
        </div>
      </Navbar>
  );
};

export default Header;