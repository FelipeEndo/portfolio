import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export default function SocialNavbar() {
  return(
    <Navbar className="mx-auto justify-content-around rounded-pill m-1 bg-gray" style={{ width: '40rem' }} >
      <Container>
        <Nav navbarScroll className="m-auto">
          <Nav.Link href="#about">
            <img
              src="/linkedin.svg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
           </Nav.Link>
        </Nav>
        <Nav navbarScroll className="m-auto">
          <Nav.Link href="#about">
            <img
            src="/github.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Nav>
        <Nav navbarScroll className="m-auto">
          <Nav.Link href="#about">
            <img
            src="/whatsapp.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Nav>
        <Nav navbarScroll className="m-auto">
          <Nav.Link href="#about">
            <img
            src="/telegram.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
