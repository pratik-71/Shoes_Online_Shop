import React, { useEffect, useState } from "react";
import "./Account_style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct_details } from "../../Redux/Slices/ProductSlice";

const Order = () => {
  const [order, setOrder] = useState([]);
  const dispatch = useDispatch();

  const handleCancel = async (

  ) => {};

  const getOrder = async () => {
    const jwttoken = localStorage.getItem("Auth-Token");
    try {
      const response = await axios.get(
        "http://localhost:3001/products/all_orders",
        {
          headers: {
            "X-Auth-Token": jwttoken,
          },
        }
      );
      if (response && Array.isArray(response.data)) {
        console.log(response.data);
        setOrder(response.data);
      } else {
        setOrder([]);
      }
    } catch (error) {
      console.log(error);
      setOrder([]); // Set order to an empty array in case of error
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      {Array.isArray(order) && order.length > 0 ? (
        <div className="row my-4 d-flex justify-content-center">
          {order.map((shoe, index) => (
            <div
              key={index}
              className="col-lg-3 mx-3 mb-4 return_order_card"
            >
              <div className="return_order_card-sm p-2">
                <div className="delivery-info">
                  <h6 className="text-center">
                    To be delivered on {shoe.delievery_date?.substring(0, 10)}
                  </h6>
                  <hr />
                </div>
                <div className="product-info">
                  <div className="image-container text-center">
                    <img
                      src={shoe.imageURL}
                      style={{ height: "25vh", width: "250px" }}
                      className="img-fluid"
                      alt={shoe.title}
                    />
                  </div>
                  <div className="text-container text-center">
                    <h5>{shoe.title}</h5>
                    <h6>{shoe.price}$</h6>
                    <h6>Quanity : {shoe.quantity}</h6>
                    <div className="button-container text-center">
                      <Link to={`/product_details/${shoe.product}`}>
                        <button className="btn btn-primary mx-1 my-1">
                          View Product
                        </button>
                      </Link>
                      <Link
                        to={`/product_details/${shoe.product}`}
                        onClick={() => dispatch(setProduct_details(shoe))}
                      >
                        <button className="btn btn-secondary mx-1 my-1">
                          Buy Again
                        </button>
                      </Link>
                      <button
                        className="btn bg-danger mx-1 my-1"
                        onClick={() => handleCancel(shoe._id)}
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-4">
          <h5 className="text-center mt-5">You have no orders  !!.</h5>
          <h5 className="text-center ">Check delivered section to check your previous order.</h5>

        </div>
      )}
    </div>
  );
};

export default Order;
