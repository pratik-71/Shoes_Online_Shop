import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import shoe from "../../Assets/Section4_All_shoes/air/a_shoe3.png";
import shoe2 from "../../Assets/Section4_All_shoes/air/a_shoe8.png";
import "./Account_style.css";

const Returns_Order = () => {
  const cart = [
    {
      id: 1,
      name: "Nike Air Jordan Max",
      description:
        "The Nike Air Jordan Max comes with comfort that allows you to push your limits without any problem. Crafted with a leather sole and available in various color options.",
      price: 149.99,
      image: shoe,
    },
    {
      id: 2,
      name: "Adidas UltraBoost",
      description:
        "The Adidas UltraBoost is designed for both comfort and performance. Its innovative design and technology provide a responsive feel with every step.",
      price: 179.99,
      image: shoe2,
    },
    {
      id: 1,
      name: "Nike Air Jordan Max",
      description:
        "The Nike Air Jordan Max comes with comfort that allows you to push your limits without any problem. Crafted with a leather sole and available in various color options.",
      price: 149.99,
      image: shoe,
    },
  ];

  return (
    <div>
      <Container>
        <Tabs
          defaultActiveKey="Order"
          transition={false}
          id="noanim-tab-example"
          className="mb-3 "
          
        >
             

             <Tab eventKey="Order" title="Order">
      <div className="row my-4 d-flex justify-content-center">
        {cart.map((shoe, index) => (
          <div key={index} className="col-lg-3 mx-3 mb-4 return_order_card">
            <div className="return_order_card-sm p-2">
              <div className="delivery-info">
                <h6 className="text-center">To be delivered on 13rd March</h6>
                <hr />
              </div>
              <div className="product-info">
                <div className="image-container text-center">
                  <img
                    src={shoe.image}
                    style={{height:"25vh",width:"250px"}}
                    className="img-fluid"
                    alt={shoe.name}
                  />
                </div>
                <div className="text-container text-center">
                  <h5>{shoe.name}</h5>
                  <h6>{shoe.price}$</h6>
                  <div className="button-container text-center">
                    <button className="btn btn-primary mx-1 my-1">View Product</button>
                    <button className="btn btn-secondary mx-1 my-1">Buy Again</button>
                    <button className="btn btn-danger mx-1 my-1">Cancel Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tab>


          <Tab eventKey="Delievered Products" title="Delievered Products">    

          {cart.map((shoe) => (
              <>
                <Row className="return_order_card my-4 p-2">
                  <Row>
                    <h4 className="text-center">Delieverd on 13rd March</h4>
                    <hr></hr>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                      <img
                        src={shoe.image}
                        className="img-fluid"
                        style={{ height: "25vh", width: "250px" }}
                      />
                    </Col>

                    <Col className="text-center">
                      <h5>{shoe.name}</h5>
                      <p>{shoe.description}</p>
                      <h6>{shoe.price}</h6>
                    </Col>
                    <Col lg={4}>
                      <div className="d-flex flex-column Return_order_btn">
                        <button className="px-1 py-1 rounded my-3">
                          View Product
                        </button>
                        <button className="px-3 py-1 rounded ">
                          Buy Again
                        </button>
                        <button className="px-3 py-1 rounded ">
                          Return Product
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </>
            ))}

          </Tab>
          <Tab eventKey="Cancelled Products" title="Cancelled Products" >
          {cart.map((shoe) => (
              <>
                <Row className="return_order_card my-4 p-2">
                  <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                      <img
                        src={shoe.image}
                        className="img-fluid"
                        style={{ height: "25vh", width: "250px" }}
                      />
                    </Col>

                    <Col className="text-center">
                      <h5>{shoe.name}</h5>
                      <p>{shoe.description}</p>
                      <h6>{shoe.price}</h6>
                    </Col>
                    <Col lg={4}>
                      <div className="d-flex flex-column Return_order_btn">
                        <button className="px-1 py-1 rounded my-3">
                          View Product
                        </button>
                        <button className="px-3 py-1 rounded ">
                          Buy Again
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </>
            ))}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Returns_Order;
