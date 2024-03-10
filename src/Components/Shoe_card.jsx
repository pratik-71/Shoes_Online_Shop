import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "../../src/Styles/Home_Section.css";
import { Link } from "react-router-dom";

const Shoe_card = ({ data }) => {
  return (
    <>
      <Container className="d-flex justify-content-between flex-wrap shoe_card">
      {data.map((item) => (
            <Card style={{ width: "18rem" }} className="my-2 ">
              <img
                src={item.image}
                alt="shoe image"
                className="shoe_img_holder"
              />
              <Card.Body className="text-center">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text><strong>{item.price}</strong></Card.Text>
                <div className="d-flex justify-content-evenly">
                  <Link to="/product_details">
                    <button className=" px-3 py-1">Buy now</button>
                  </Link>
                  <Link>
                    <button className=" px-3 py-1">Add to Cart</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
        ))}
        
      </Container>
      
      
    </>
  );
};

export default Shoe_card;
