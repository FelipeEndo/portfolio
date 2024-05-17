import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Skills() {
  return (
  <Container>
    <div className="d-flex pt-3 justify-content-around">
      <div>
        <img src="ruby.svg" height="70" width="70" className="mx-auto" />
        <div className="text-center text-white-50 my-2">
          Ruby
        </div>
      </div>

      <div>
        <img src="docker.svg" height="70" width="70" className="mx-auto" />
        <div className="text-center text-white-50 my-2">
          Docker
        </div>
      </div>

      <div>
        <img src="react-2.svg" height="70" width="70" className="mx-auto" />
        <div className="text-center text-white-50 my-2">
          React
        </div>
      </div>

      <div>
        <img src="elixir-1.svg" height="70" width="70" className="mx-auto" />
        <div className="text-center text-white-50 my-2">
          Elixir
        </div>
      </div>

      <div>
        <img src="vue-9.svg" height="70" width="70" className="mx-auto" />
        <div className="text-center text-white-50 my-2">
          VueJS
        </div>
      </div>
    </div>
  </Container>
  );
}

