import { signOut } from 'firebase/auth';
import React from 'react';
import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Image/logo.jpg'
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
    return (
        <header>
         <>
         <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><img src={logo} height="35px" width="130px" alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link href="home#doctor">Doctor</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      {
        user?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}> Log Out</button>
        :
        <Nav.Link eventKey={2} as={Link} to="login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       </>
        </header>
    );
};

export default Header;