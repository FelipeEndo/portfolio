import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MainNavbar() {
  return(
    <Navbar fixed="top" data-bs-theme="dark" expand="lg" className="bg-dark-blue">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav navbarScroll className="my-auto mx-3">
          <Nav.Link className="fs-3" href="#home">
            Home
          </Nav.Link>
        </Nav>

        <Nav navbarScroll className="my-auto mx-3">
          <Nav.Link className="fs-3" href="#about">
            About
          </Nav.Link>
        </Nav>

        <Nav navbarScroll className="my-auto mx-3">
          <Nav.Link className="fs-3" href="#skills">
            Skills
          </Nav.Link>
        </Nav>

        <Nav navbarScroll className="my-auto mx-3">
          <Nav.Link className="fs-3" href="#timeline">
            Timeline
          </Nav.Link>
        </Nav>

        <Nav navbarScroll className="my-auto mx-3">
          <Nav.Link className="fs-3" href="#projects">
            Projects
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}
