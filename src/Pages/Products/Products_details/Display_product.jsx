import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import shoe from "../../../Assets/Section4_All_shoes/air/a_shoe8.png";
import "../Products_details/product.css";
import Display_accordination from "./Display_accordination";
import Display_other_shoe from "./Display_other_shoe";
import { Link } from "react-router-dom";

const Display_product = () => {

  const [selectedSize, setSelectedSize] = useState(""); 

  const handleSizeChange = (size) => {
    setSelectedSize(size); 
  };


  return (
    <div>
      <Container>
        <Row>
          <Col className="my-auto">
            <img src={shoe} alt="shoe-image" className="img-fluid " />
          </Col>
          <Col className="my-4">
            <h2 className="text-center">Air Jordan Max</h2>
            <hr></hr>

            <p>
              Comfortable, durable and timeless—it's number 1 for a reason. The
              classic '80s construction is paired with bold details for style
              that tracks whether you're on the court or on the go.
              Nature-inspired features like a canvas upper and special logo
              bloom from its AF-1 roots.
            </p>

            <h5>MRP : $599.00 </h5>


            <p className="text-secondary">
              incl. of taxes<br></br>
              (Also includes all applicable duties)
            </p>




             <h6>Select Shoe Size</h6>
            <div className="size-buttons">

              <button
                className={`size-button ${selectedSize === "6" ? "selected" : ""}`}
                onClick={() => handleSizeChange("6")}
              >
                UK 6
              </button>

              <button
                className={`size-button ${selectedSize === "7" ? "selected" : ""}`}
                onClick={() => handleSizeChange("7")}
              >
                UK 7
              </button>

              <button
                className={`size-button ${selectedSize === "8" ? "selected" : ""}`}
                onClick={() => handleSizeChange("8")}
              >
                UK 8
              </button>

              <button
                className={`size-button ${selectedSize === "9" ? "selected" : ""}`}
                onClick={() => handleSizeChange("9")}
              >
                UK 9
              </button>

              <button
                className={`size-button ${selectedSize === "10" ? "selected" : ""}`}
                onClick={() => handleSizeChange("10")}
              >
                UK 10
              </button>

              <button
                className={`size-button ${selectedSize === "11" ? "selected" : ""}`}
                onClick={() => handleSizeChange("11")}
              >
                UK 11
              </button>

              <button
                className={`size-button ${selectedSize === "12" ? "selected" : ""}`}
                onClick={() => handleSizeChange("12")}
              >
                UK 12
              </button>

            </div>

              <div className="text-center column">
                <Link to="/address">
                <button className="px-5 py-1 bg-dark rounded text-white my-4">Buy Now</button>
                </Link>              
                </div>

              <div className="text-center">
              <button className="px-4 py-1 border-1 rounded ">Add to Cart</button>
              </div>


              <div className="accordintion">
                <Display_accordination/>
              </div>
            
          </Col>
        </Row>
        <Row>
          <Display_other_shoe/>
        </Row>
      </Container>
    </div>
  );
};

export default Display_product;
