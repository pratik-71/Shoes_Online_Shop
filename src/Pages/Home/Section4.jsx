import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Shoe_card from "../../Components/Shoe_card";
import { Women, mercurial, premium } from "../../Data/Shoe_data";
import { Air } from "../../Data/Shoe_data";
import Section2 from "./Section2";
import { Link, useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();

  const redirect = () => {
   navigate("/products")
  };

  return (
    <>
      <Container>
        <h2 className="text-center">Our Products</h2>
        <Tabs
          defaultActiveKey="Men"
          id="fill-tab-example"
          className="mb-3"
          onClick={()=>redirect()}
          fill
        >
          <Tab eventKey="Men" title="Men">
            <Shoe_card  selected_category={"All"} display_number={8}/> 
          </Tab>
          <Tab eventKey="Women" title="Women Wear" ob>
            <Shoe_card  />
          </Tab>
        
         <Tab eventKey="Sports" title="Sports Wear">
            <Shoe_card />
          </Tab>
        
          <Tab eventKey="Office" title="Office Wear">
            <Shoe_card />
          </Tab>
          <Tab eventKey="More" title="More"></Tab>
        </Tabs>

        <div className="d-flex justify-content-center align-items-center">
          <div className="line mx-3"></div>
          <Link to="/products">
          <button className="px-4 py-1 my-3 more_btn">More</button>
          </Link>
          <div className="line mx-3"></div>
        </div>
      </Container>
    </>
  );
};

export default Section4;
