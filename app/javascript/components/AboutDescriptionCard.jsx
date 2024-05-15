import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AboutDescriptionCard() {
  return (
    <div>
   <Card bg="dark" text="white" style={{ width: '52rem', height: '20rem' }}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.

          Some quick example text to build on the card title and make up the
          bulk of the card's content.

          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

