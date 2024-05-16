import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ProjectsSection() {
  return (
    <div className="justify-content-center">
      <h1 className="text-center text-white pt-5"> Projects </h1>
      <div className="justify-content-center py-5" style={{ display: 'flex' }}>
        <Row className="justify-content-around">
          <Col md='4'>
            <Card text="white" className="mx-5 bg-dark-blue" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="ruby.svg" />
              <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                  Project Description
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4'>
            <Card text="white" className="mx-5 bg-dark-blue" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="ruby.svg" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Project Description
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4'>
            <Card text="white" className="mx-5 bg-dark-blue" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="ruby.svg" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Project Description
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

