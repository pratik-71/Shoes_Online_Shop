
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../Products_details/product.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct_details } from "../../../Redux/Slices/ProductSlice";

const Display_info = () => {


  const [selectedSize, setSelectedSize] = useState("");
  const [product, setproduct] = useState({});
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const get_product = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/get_product/${id}`
      );
      if (!response) {
        console.log("no data found");
      }
      setproduct(response.data);
      dispatch(setProduct_details(response.data))
    } catch (error) {
      console.log(error.messege);
    }
  };

  useEffect(() => {
    get_product();
  }, []);




  return (
    <div>
        <Row>
        <Col className="my-auto">
            <img
              src={product.imageURL}
              alt="shoe-image"
              className="img-fluid my-auto"
              style={{ height: "50vh", width: "500px" }}
            />
          </Col>
          <Col className="my-4">
            <h2 className="text-center">{product.title}</h2>
            <hr></hr>

            <p>
              Comfortable, durable and timeless—it's number 1 for a reason. The
              classic '80s construction is paired with bold details for style
              that tracks whether you're on the court or on the go.
              Nature-inspired features like a canvas upper and special logo
              bloom from its AF-1 roots.
            </p>

            <h5>MRP : ${product.price}.00 </h5>

            <p className="text-secondary">
              incl. of taxes<br></br>
              (Also includes all applicable duties)
            </p>

            <h6>Select Shoe Size</h6>
            <div className="size-buttons">
              <button
                className={`size-button ${
                  selectedSize === "6" ? "selected" : ""
                }`}
                onClick={() => handleSizeChange("6")}
              >
                UK 6
              </button>

              <button
                className={`size-button ${
                  selectedSize === "7" ? "selected" : ""
                }`}
                onClick={() => handleSizeChange("7")}
              >
                UK 7
              </button>

              <button
                className={`size-button ${
                  selectedSize === "8" ? "selected" : ""
                }`}
                onClick={() => handleSizeChange("8")}
              >
                UK 8
              </button>

              <button
                className={`size-button ${
                  selectedSize === "9" ? "selected" : ""
                }`}
                onClick={() => handleSizeChange("9")}
              >
                UK 9
              </button>

              <button
                className={`size-button ${
                  selectedSize === "10" ? "selected" : ""
                }`}
                onClick={() => handleSizeChange("10")}
              >
                UK 10
              </button>

              <button
                className={`size-button ${
                  selectedSize === "11" ? "selected" : ""
                }`}
                onClick={() => handleSizeChange("11")}
              >
                UK 11
              </button>

              <button
                className={`size-button ${
                  selectedSize === "12" ? "selected" : ""
                }`}
                onClick={() => handleSizeChange("12")}
              >
                UK 12
              </button>
            </div>

            <div className="my-4 d-flex align-items-center justify-content-center text-center">
              <label className="mx-2">Enter Quantity of product</label>
              <input
                type="number"
                rounded
                defaultValue={1}
                className="form-control search-input b-0 w-25"
              />
            </div>

            <div className="text-center column">
              <Link to="/address">
                <button className="px-5 py-1 bg-dark rounded text-white">
                  Buy Now
                </button>
              </Link>
            </div>

            <div className="text-center">
              <button className="px-4 py-1 border-1 rounded my-3">
                Add to Cart
              </button>
            </div>
          </Col>
        </Row>
      
    </div>
  )
}

export default Display_info
