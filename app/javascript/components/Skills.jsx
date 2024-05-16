import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Skills() {
  return (
    <div className="py-3 mt-5" id="skills">
      <div className="justify-content-center mt-5" style={{ display: 'flex' }}>
        <Card className="bg-light-blue border-0 mx-auto" text="white-50" style={{ width: '8rem' }}>
          <Card.Img variant="top" src="ruby.svg" height="70" width="70" className="my-4" />
          <Card.Body>
            <Card.Title className="text-center">Ruby</Card.Title>
          </Card.Body>
        </Card>

        <Card className="bg-light-blue border-0 mx-auto" text="white-50" style={{ width: '8rem' }}>
          <Card.Img variant="top" src="docker.svg" height="70" width="70" className="my-4" />
          <Card.Body>
            <Card.Title className="text-center">Docker</Card.Title>
          </Card.Body>
        </Card>

        <Card className="bg-light-blue border-0 mx-auto" text="white-50" style={{ width: '8rem' }}>
          <Card.Img variant="top" src="react-2.svg" height="70" width="70" className="my-4" />
          <Card.Body>
            <Card.Title className="text-center">React</Card.Title>
          </Card.Body>
        </Card>

        <Card className="bg-light-blue border-0 mx-auto" text="white-50" style={{ width: '8rem' }}>
          <Card.Img variant="top" src="elixir-1.svg" height="70" width="70" className="my-4" />
          <Card.Body>
            <Card.Title className="text-center">Elixir</Card.Title>
          </Card.Body>
        </Card>

        <Card className="bg-light-blue border-0 mx-auto" text="white-50" style={{ width: '8rem' }}>
          <Card.Img variant="top" src="vue-9.svg" height="70" width="70" className="my-4" />
          <Card.Body>
            <Card.Title className="text-center">VueJs</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

