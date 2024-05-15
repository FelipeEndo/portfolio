import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export default function MainNavbar() {
  return(
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary justify-content-around">
      <Container>
        <Navbar.Brand href="#home">
           <img
              src="/guy.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="m-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
