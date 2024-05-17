import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AboutDescriptionCard() {
  return (
    <div className="md-12 d-flex pb-5">
   <Card className="bg-light-blue mx-auto" text="white" style={{ width: '52rem', height: '20rem' }}>
      <Card.Body>
        <Card.Text className="text-center fs-4">
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

