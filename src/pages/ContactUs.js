import React from "react";
import { Button, Container, Form } from "react-bootstrap-v5";
const ContactUs = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <Form className="mb-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} type="text" label="Message" />
        </Form.Group>
        <div className="d-flex justify-content-center align-items-center">
        <Button
          onClick={(e) => e.preventDefault()}
          variant="primary"
          type="submit"
        >
          Send
        </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactUs;
