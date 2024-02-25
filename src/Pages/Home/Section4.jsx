import React from "react";
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

  const more_redirect = () => {
    console.log("triggered");
    navigate("special_edition");
  };

  return (
    <>
      <Container>
        <h2 className="text-center">Our Products</h2>
        <Tabs
          defaultActiveKey="Premium"
          id="fill-tab-example"
          className="mb-3"
          fill

>
          <Tab eventKey="Premium" title="Premium">
            <Shoe_card data={premium} />
          </Tab>
          <Tab eventKey="Air" title="Air">
            <Shoe_card data={Air} />
          </Tab>
          <Tab eventKey="Women" title="Women Wear">
            <Shoe_card data={Women} />
          </Tab>
          <Tab eventKey="Mercurial" title="Mercurial">
            <Shoe_card data={mercurial} />
          </Tab>
          <Tab eventKey="More" title="More"></Tab>
        </Tabs>

        <div className="d-flex justify-content-center align-items-center">
          <div className="line mx-3"></div>
          <button className="px-4 py-1 my-3 more_btn">More</button>
          <div className="line mx-3"></div>
        </div>
      </Container>
    </>
  );
};

export default Section4;
