import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Skills() {
  return (
    <div>
      <h1> Skills </h1>
        <div className="justify-content-center mt-5" style={{ display: 'flex' }}>
          <Card className="mx-2" style={{ width: '60rem' }}>
            <Row className='g-0'>
              <Col md='4'>
                <Card.Img src="react-2.svg" height="100" width="100" className="my-4" />
              </Col>
              <Col md='8'>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    See some of my projects using React
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mx-2" style={{ width: '60rem' }}>
            <Row className='g-0'>
              <Col md='4'>
                <Card.Img src="react-2.svg" height="100" width="100" className="mx-auto mt-4" />
              </Col>
              <Col md='8'>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    See some of my projects using React
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mx-2" style={{ width: '60rem' }}>
            <Row className='g-0'>
              <Col md='4'>
                <Card.Img src="react-2.svg" height="100" width="100" className="mx-auto mt-4" />
              </Col>
              <Col md='8'>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    See some of my projects using React
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>

        <div className="justify-content-center mt-5" style={{ display: 'flex' }}>
          <Card className="mx-2" style={{ width: '60rem' }}>
            <Row className='g-0'>
              <Col md='4'>
                <Card.Img src="react-2.svg" height="100" width="100" className="my-4" />
              </Col>
              <Col md='8'>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    See some of my projects using React
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mx-2" style={{ width: '60rem' }}>
            <Row className='g-0'>
              <Col md='4'>
                <Card.Img src="react-2.svg" height="100" width="100" className="mx-auto mt-4" />
              </Col>
              <Col md='8'>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    See some of my projects using React
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mx-2" style={{ width: '60rem' }}>
            <Row className='g-0'>
              <Col md='4'>
                <Card.Img src="react-2.svg" height="100" width="100" className="mx-auto mt-4" />
              </Col>
              <Col md='8'>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    See some of my projects using React
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
    </div>
  );
}

