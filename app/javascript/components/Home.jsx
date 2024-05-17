import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import About from "./About";
import MainNavbar from "./MainNavbar";
import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";
import Timeline from "./Timeline";
import SocialNavbar from "./SocialNavbar";
import Introduction from "./Introduction";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default () => (
  <Container fluid className="bg-dark-blue">
    <div>
      <MainNavbar />
    </div>

    <div className="bg-dark-blue" style={{ height: '5rem' }}></div>

    <div className="d-flex" style={{ height: '60rem' }}>
      <Introduction />
    </div>
    <div style={{ height: '10rem' }}>
        <SocialNavbar />
    </div>

    <div className="bg-light-blue" style={{ height: '10rem' }}></div>

    <div id="about">
      <About />
    </div>

    <div id="skills" className="bg-light-blue" style={{ height: '10rem' }}>
      <Skills />
    </div>

    <div>
      <div id="timeline" className="pt-5">
        <Timeline />
      </div>
    </div>

    <div id="projects" className="pt-5">
      <ProjectsSection />
    </div>
 </Container>
);
