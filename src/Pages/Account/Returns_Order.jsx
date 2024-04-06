import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./Account_style.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { setProduct_details } from "../../Redux/Slices/ProductSlice";

const Returns_Order = () => {
   const dispatch = useDispatch()
   const [order,setorder] = useState([])


  const get_order = async() =>{
    const jwttoken = localStorage.getItem("Auth-Token")
    try {
      const response = await axios.get("http://localhost:3001/products/all_orders",{
        headers:{
          "X-Auth-Token": jwttoken
        }
      })
      if(response){
        console.log(response.data)
        setorder(response.data)
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    get_order()
  },[])

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
            {order && order.length > 0 && (
              <div className="row my-4 d-flex justify-content-center">
                {order.map((shoe, index) => (
                  <div key={index} className="col-lg-3 mx-3 mb-4 return_order_card">
                    <div className="return_order_card-sm p-2">
                      <div className="delivery-info">
                       <h6 className="text-center">To be delivered on {shoe.delievery_date?.substring(0, 10)}</h6>
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
                            <button className="btn btn-primary mx-1 my-1">View Product</button>
                            </Link>
                          <Link to={`/product_details/${shoe.product}`} onClick={()=>dispatch(setProduct_details(shoe))}>
                            <button className="btn btn-secondary mx-1 my-1">Buy Again</button>
                            </Link>  
                            <button className="btn bg-danger mx-1 my-1">Cancel Order</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Tab>

          {/* <Tab eventKey="Delievered Products" title="Delievered Products">    

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
                        src={shoe.imageURL}
                        className="img-fluid"
                        style={{ height: "25vh", width: "250px" }}
                      />
                    </Col>

                    <Col className="text-center">
                      <h5>{shoe.title}</h5>
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
                        src={shoe.imageURL}
                        className="img-fluid"
                        style={{ height: "25vh", width: "250px" }}
                      />
                    </Col>

                    <Col className="text-center">
                      <h5>{shoe.title}</h5>
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
          </Tab> */}
        </Tabs>
      </Container>
    </div>
  );
};

export default Returns_Order;
