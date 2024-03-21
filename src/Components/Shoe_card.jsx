import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "../../src/Styles/Home_Section.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProduct_details, setProducts } from "../Redux/Slices/ProductSlice";
import axios from "axios";

const Shoe_card = ({ selected_category,display_number }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);

  // ------------ get all products ---------------
  useEffect(() => {
    const get_products = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/products/all_product"
        );
        if (response) {
          dispatch(setProducts(response.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    get_products();
  }, []);

  // -------------- Filter product categories ----------------
  let filtered_products =
    selected_category === "All"
      ? products
      : products.filter((data) => data.category === selected_category);

  if(display_number==8){
    filtered_products = filtered_products.slice(0,display_number)  
  }  

  return (
    <>
      <Container className="d-flex justify-content-evenly flex-wrap shoe_card">
        {loading ? (
          <p>Loading...</p>
        ) : filtered_products.length === 0 ? (
          <h5 className="text-center">
            No products found..! .. Try in different category or change the
            filter
          </h5>
        ) : (
          filtered_products.map((item) => (
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
                  <Link to={`/product_details/${item._id}`}>
                  <button className=" px-3 py-1">Buy now</button>
                  </Link>
                 
                  <Link>
                    <button className=" px-3 py-1">Add to Cart</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </>
  );
};

export default Shoe_card;
