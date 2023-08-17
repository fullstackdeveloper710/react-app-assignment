import React from "react";
import {  Col, Container, Row } from "react-bootstrap-v5";
import Card from "../components/Card";
const Gallery = () => {
  return (
    <Container>
      <h1>Gallery</h1>
      <Row className="mb-2 g-3">
        <Col md={"4"}>
          <Card />
        </Col>
        <Col md={"4"}>
          <Card />
        </Col>
        <Col md={"4"}>
          <Card />
        </Col>
        <Col md={"4"}>
          <Card />
        </Col>
        <Col md={"4"}>
          <Card />
        </Col>
        <Col md={"4"}>
          <Card />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
