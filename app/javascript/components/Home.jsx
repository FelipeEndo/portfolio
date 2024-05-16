import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import About from "./About";
import MainNavbar from "./MainNavbar";
import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";
import Timeline from "./Timeline";

export default () => (
  <div className="bg-dark-blue">
    <MainNavbar />

  <div className="bg-dark-blue pt-5">
    <Container className="fluid justify-content-md-center">
      <div>
         <About />
      </div>
    </Container>
   </div>

  <div className="bg-dark-blue">
    <Container fluid className="justify-content-md-center">
      <div>
        <Timeline />
      </div>
    </Container>
   </div>

  <div className="bg-light-blue">
    <Container fluid className="justify-content-md-center">
      <div>
        <Skills />
      </div>
    </Container>
   </div>


  <div className="bg-dark-blue">
    <Container fluid className="justify-content-md-center">
      <div>
        <ProjectsSection />
      </div>
    </Container>
   </div>
  </div>
);
