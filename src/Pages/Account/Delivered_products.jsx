import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Delivered_products = () => {
  const [order, setOrder] = useState([]);

  const getDeliveredProduct = async () => {
    const jwttoken = localStorage.getItem("Auth-Token");
    try {
      const response = await axios.get(
        "http://localhost:3001/products/delivered_order",
        {
          headers: {
            "X-Auth-Token": jwttoken,
          },
        }
      );
      if (response && Array.isArray(response.data)) {
        console.log(response.data);
        setOrder(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDeliveredProduct();
  }, []);

  return (
    <div>
      {order && order.length > 0 ? (
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {order.map((shoe, index) => (
            <div
              key={index}
              className="return_order_card_wrapper mx-4 my-4"
            >
              <Row className="deliver_product_card p-2">
                <h6 className="text-center">
                  Delivered on {shoe.delievery_date?.substring(0, 10)}
                </h6>
                <hr />
                <Row>
                  <Col className="d-flex justify-content-center align-items-center">
                    <img
                      src={shoe.imageURL}
                      className="img-fluid"
                      style={{ height: "25vh", width: "250px" }}
                      alt={shoe.title}
                    />
                  </Col>
                  <Col className="text-center">
                    <h5>{shoe.title}</h5>
                    <h6>Rs. {shoe.price}</h6>
                    <h6>Quantity: {shoe.quantity}</h6>
                    <div className="d-flex flex-column Return_order_btn">
                      <button className="px-1 py-1 rounded my-3 bg-primary border-0 text-white">
                        View Product
                      </button>
                      <button className="px-1 py-1 rounded bg-warning border-0 my-1">
                        Buy Again
                      </button>
                      <button className="px-1 py-1 rounded bg-danger border-0">
                        Return Product
                      </button>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          ))}
        </div>
      ) : (
        <h5 className="text-center my-5">No products delivered yet</h5>
      )}
    </div>
  );
};

export default Delivered_products;
