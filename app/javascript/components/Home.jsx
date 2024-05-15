import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import About from "./About";
import MainNavbar from "./MainNavbar";
import Skills from "./Skills";

export default () => (
  <div>
    <MainNavbar />
    <Container className="justify-content-md-center">
      <div className="mt-5">
         <About />
      </div>
      <div className="mt-5">
      <Skills />
      </div>
    </Container>
  </div>
);
