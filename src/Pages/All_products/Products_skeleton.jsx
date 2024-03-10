import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category_section from "./Category_section";
import Filter_product from "./Filter_product";

const Products_skeleton = () => {
  return (
    <div className="mx-3 my-5">
    
        <Row>
          <Col sm={2} md={2} lg={4} xl={2}>
            <Filter_product />
          </Col>
          <Col>
            <Category_section />
          </Col>
        </Row>
      
    </div>
  );
};

export default Products_skeleton;
