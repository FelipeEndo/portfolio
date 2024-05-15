import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Skills() {
  return (
    <div>
      <h1> Skills </h1>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="center" src="react-2.svg" height="70" width="70" className="mx-auto" />
              <Card.Body>
                <Card.Title>ReactJs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <CardGroup className="border-0">
        <Card className="justify-content-center">
          <Card.Img variant="horizontal" src="react-2.svg" height="70" width="70" className="mx-auto" />
          <Card.Body>
            <Card.Title>ReactJs</Card.Title>
          </Card.Body>
        </Card>
        <Card className="justify-content-right px-auto">
          <Card.Img variant="center" src="ruby.svg" height="70" width="70" className="mx-auto"/>
          <Card.Body>
            <Card.Title className="justify-content-center">Ruby</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="center" src="rails-1.svg" height="70" width="100" className="mx-auto" />
          <Card.Body>
            <Card.Title>Rails</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="center" src="elixir-1.svg" width="120" className="mx-auto" />
          <Card.Body>
            <Card.Title>Elixir</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="center" src="docker.svg" height="70" width="70" className="mx-auto" />
          <Card.Body>
            <Card.Title>Docker</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="center" src="vue-9.svg" height="70" width="70" className="mx-auto pt-2" />
          <Card.Body>
            <Card.Title>VueJs</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

