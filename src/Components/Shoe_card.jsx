import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "../../src/Styles/Home_Section.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct_details } from "../Redux/Slices/ProductSlice";
import axios from "axios";

const Shoe_card = ({ selected_category }) => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  // --------------- handle buy now button --------------
  const handleBuynow = (e, item) => {
    e.preventDefault();
    dispatch(setProduct_details(item));
    navigate("/product_details");
  };



  // ------------ get all products ---------------
  useEffect(() => {
    const get_products = async (req, res) => {
      try {
        const response = await axios.get(
          "http://localhost:3001/products/all_product"
        );
        if (response) {
          setproducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    get_products();
  }, []);



  // -------------- Filter product categories ----------------
  const filtered_products =
    selected_category === "All"
      ? products
      : products.filter((data) => data.category === selected_category);




  return (
    <>
      <Container className="d-flex justify-content-evenly flex-wrap shoe_card">
        {filtered_products.map((item) => (
          <Card style={{ width: "18rem" }} className="my-3" key={item._id}>
            <img
              src={item.imageURL}
              alt="shoe image"
              className="shoe_img_holder bg-light"
            />
            <Card.Body className="text-center">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <strong>{item.price}</strong>
              </Card.Text>
              <div className="d-flex justify-content-evenly">
                <button
                  onClick={(e) => handleBuynow(e, item)}
                  className=" px-3 py-1"
                >
                  Buy now
                </button>

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
