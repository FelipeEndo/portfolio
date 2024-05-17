import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function SocialNavbar() {
  return(
  <Container>
    <Navbar className="d-flex justify-content-around mx-auto my-5 rounded-pill bg-gray" >
        <Nav>
          <Nav.Link href="#about">
            <img
              src="/linkedin.svg"
              width="30"
              height="30"
              className="d-inline-block align-top img-fluid"
              alt="Linkedin logo"
            />
           </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#about">
            <img
            src="/github.svg"
            width="30"
            height="30"
            className="d-inline-block align-top img-fluid"
            alt="Github logo"
            />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#about">
            <img
            src="/whatsapp.svg"
            width="30"
            height="30"
            className="d-inline-block align-top img-fluid"
            alt="Whatsapp logo"
            />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#about">
            <img
            src="/telegram.svg"
            width="30"
            height="30"
            className="d-inline-block align-top img-fluid"
            alt="Telegram logo"
            />
          </Nav.Link>
        </Nav>
    </Navbar>
  </Container>
  );
}
