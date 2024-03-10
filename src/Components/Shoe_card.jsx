import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "../../src/Styles/Home_Section.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct_details } from "../Redux/Slices/ProductSlice";

const Shoe_card = ({ data }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

  const handleBuynow = (e,item) => {
    e.preventDefault()
    dispatch(setProduct_details(item))
    navigate("/Update_product")
  }

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
                
                    <button onClick={(e)=>handleBuynow(e,item)} className=" px-3 py-1">Buy now</button>
                
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
