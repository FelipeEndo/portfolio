import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MainNavbar() {
  return(
    <Navbar bg="dark" fixed="top" data-bs-theme="dark" expand="lg" className="bg-body-tertiary justify-content-around">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="#home">About</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="#home">Projects</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
