import React from "react";
import { Air, Women, mercurial, premium } from "../../Data/Shoe_data";
import Shoe_card from "../../Components/Shoe_card";
import { Tab, Tabs } from "react-bootstrap";

const Category_section = () => {
  return (
    <div>
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
      </Tabs>
    </div>
  );
};

export default Category_section;
