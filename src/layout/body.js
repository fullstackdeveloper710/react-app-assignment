import React from "react";
import Banner from "../components/banner";
import { Col, Container, Row } from "react-bootstrap-v5";
import Card from "../components/Card";
const Body = () => {
  return (
    <div>
      <Banner />
      <Container>
        <p className="text-center mt-2 pt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <Row className="g-4 m-3">
          <Col md="4" xs="12" sm="6">
            <Card />
          </Col>
          <Col md="4" xs="12" sm="6">
            <Card />
          </Col>
          <Col md="4" xs="12" sm="6">
            <Card />
          </Col>
          <Col md="4" xs="12" sm="6">
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
