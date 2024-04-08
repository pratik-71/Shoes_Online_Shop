import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../Products_details/product.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct_details, setProduct_info } from "../../../Redux/Slices/ProductSlice";

const Display_info = () => {
  const [selectedSize, setSelectedSize] = useState(6);
  const [quantity, setquantity] = useState(1);
  const [product, setproduct] = useState({});
  const [isinstock,setisinstock] = useState(true)
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate()


  const handle_add_cart=async(item)=>{
    const jwttoken = localStorage.getItem("Auth-Token")
    try {
       console.log(item._id)
      const response =await axios.post("http://localhost:3001/products/add_cart",{
        product : item._id,
        imageURL:item.imageURL,
        title:item.title,
        price:item.price
      },{
        headers:{
          "X-Auth-Token": jwttoken
        }
      })

      if(response){
        console.log("item added succesfully")
        navigate("/Profile/Cart")
      }
    } catch (error) {
      
    }
  }

  const get_product = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/get_product/${id}`
      );
      if (!response) {
        console.log("no data found");
      }
      setproduct(response.data);
      dispatch(setProduct_info(response.data))
      if(response.data.available_items<=0){setisinstock(false)}
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
        <Col md={5} className="my-auto ">
          <div className="image_box">
            <img
              src={product.imageURL}
              alt="shoe-image"
              className="img-fluid my-auto"
              style={{ height: "40vh", width: "450px" }}
            />
          </div>
        </Col>
        <Col className="my-4 ">
          <h2 className="text-center">{product.title}</h2>
          <hr></hr>

          <p>
            Comfortable, durable and timeless—it's number 1 for a reason. The
            classic '80s construction is paired with bold details for style that
            tracks whether you're on the court or on the go. Nature-inspired
            features like a canvas upper and special logo bloom from its AF-1
            roots.
          </p>

          <h5>MRP : Rs. {product.price}.00 </h5>

          <p className="text-secondary">
            incl. of taxes<br></br>
            (Also includes all applicable duties)
          </p>

          <h6>Select Shoe Size</h6>
          <div className="size-buttons">
            <button

              className={`size-button ${
                selectedSize === 6 ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(6)}
            >
              UK 6
            </button>

            <button
              className={`size-button ${
                selectedSize === 7 ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(7)}
            >
              UK 7
            </button>

            <button
              className={`size-button ${
                selectedSize === 8 ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(8)}
            >
              UK 8
            </button>

            <button
              className={`size-button ${
                selectedSize === 9 ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(9)}
            >
              UK 9
            </button>

            <button
              className={`size-button ${
                selectedSize === 10 ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(10)}
            >
              UK 10
            </button>

            <button
              className={`size-button ${
                selectedSize === 11 ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(11)}
            >
              UK 11
            </button>

            <button
              className={`size-button ${
                selectedSize === 12 ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(12)}
            >
              UK 12
            </button>
          </div>

          <div className="text-center my-3">
           {
            isinstock ?  <h6>Available Units : {product.available_items}</h6> :  <h6 
          className="text-danger">Sorry ! product is out of stock</h6>
           }
          </div>

          <div className="my-4 d-flex align-items-center justify-content-center text-center">
            <label className="mx-2">Enter Quantity of product</label>
            <input
              type="number"
              rounded
              onChange={(e) => setquantity(e.target.value)}
              defaultValue={1}
              className="form-control search-input b-0 w-25"
            />
          </div>

          <div className="text-center column">
            <Link to="/address">
              {
                isinstock && (<> <button
               
                  onClick={() =>
                    dispatch(
                      setProduct_details({
                        ...product,
                        quantity: quantity,
                        size: selectedSize,
                      })
                    )
                  }
                  className="px-5 py-1 bg-dark rounded text-white"
                >
                  Buy Now
                </button></>)
              }
            </Link>
          </div>

          <div className="text-center">
            <button onClick={()=>handle_add_cart(product)} className="px-4 py-1 border-1 rounded my-3">
              Add to Cart
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Display_info;
