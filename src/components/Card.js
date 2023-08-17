import React from "react";
import { Button, Card as CardComp } from "react-bootstrap-v5";
import shop from "../assets/images/shop.jpg";
const Card = () => {
  return (
    <CardComp>
      <CardComp.Img variant="top" src={shop} />
      <CardComp.Body>
        <CardComp.Title>Card Title</CardComp.Title>
        <CardComp.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardComp.Text>
        <Button variant="primary">Go somewhere</Button>
      </CardComp.Body>
    </CardComp>
  );
};

export default Card;
