import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import shoe from "../../Assets/Section4_All_shoes/air/a_shoe3.png";
import shoe2 from "../../Assets/Section4_All_shoes/air/a_shoe8.png";
import "./Account_style.css";
import axios from "axios";

const Returns_Order = () => {
  
   const [order,setorder] = useState([])


  const get_order = () =>{
    const jwttoken = localStorage.getItem("Auth-Token")
    try {
      const response = axios.get("http://loalhost:3001/products/get_order",{
        headers:{
          "X-Auth-Token": jwttoken
        }
      })
      if(response){
        setorder(response.data)
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Container>
        <Tabs
          defaultActiveKey="Order"
          transition={false}
          id="noanim-tab-example"
          className="mb-3 "
          
        >
             

             <Tab eventKey="Order" title="Orders">
      <div className="row my-4 d-flex justify-content-center">
        {order.map((shoe, index) => (
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

          {order.map((shoe) => (
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
          {order.map((shoe) => (
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
