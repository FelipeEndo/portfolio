import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AboutPhotoCard() {
  return (
    <div className="me-5">
      <Card className="bg-light-blue" text="white" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="guy.jpg" />
        <Card.Body>
          <Card.Title>Felipe Endo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
    <ListGroup className="list-group-flush" text="white">
        <ListGroup.Item>Linkedin</ListGroup.Item>
        <ListGroup.Item>Email</ListGroup.Item>
        <ListGroup.Item>Github</ListGroup.Item>
    </ListGroup>
      </Card>
    </div>
  );
}
