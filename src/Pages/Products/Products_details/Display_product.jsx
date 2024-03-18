import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Products_details/product.css";
import Display_other_shoe from "./Display_other_shoe";
import Display_info from "./Display_info";
import Add_review from "./Add_review";
import Display_accordination from "./Display_accordination"

const Display_product = () => {
  
  return (
    <div>
      <Container>
           <Display_info/>
        <Row className="d-flex justify-content-between">
          <Col xs={12} md={4} >
             <Add_review/>
          </Col>

          <Col  xs={12} md={6}>
            <Display_accordination/>
          </Col>
        </Row>

        <Row>
          <Display_other_shoe />
        </Row>
      </Container>
    </div>
  );
};

export default Display_product;
