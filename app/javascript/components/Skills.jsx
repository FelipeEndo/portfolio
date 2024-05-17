import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Skills() {
  return (
  <Container fluid>
    <div className="d-flex pt-3 justify-content-between">
      <div className="text-center text-white-50 align-middle">
        <img
        src="ruby.svg"
        height="100"
        width="100"
        className="d-inline-block align-bottom img-fluid"
        alt="Ruby logo"
        />
      </div>

      <div className="align-middle">
        <img
        src="docker2.svg"
        height="120"
        width="120"
        className="d-inline-block align-bottom img-fluid"
        alt="Docker logo"
        />
      </div>

      <div className="align-middle">
        <img
        src="react-2.svg"
        height="100"
        width="100"
        className="d-inline-block align-middle img-fluid"
        alt="React logo"
        />
      </div>

      <div>
        <img
        src="elixir-1.svg"
        height="100"
        width="100"
        className="d-inline-block align-middle img-fluid"
        alt="elixir logo"
        />
      </div>

      <div className="align-bottom pt-3">
        <img
        src="vue2.svg"
        height="100"
        width="100"
        className="align-bottom img-fluid"
        alt="Vue logo"
        />
      </div>
    </div>
  </Container>
  );
}

