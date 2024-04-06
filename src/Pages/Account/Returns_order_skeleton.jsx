import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Order from "./Order";
import Delivered_products from "./Delivered_products";
import Cancelled_product from "./Cancelled_product";

const Returns_order_skeleton = () => {
  const navigate = useNavigate();
  const { orderparam } = useParams();
  const [activeTab, setActiveTab] = useState("Delivered Products");

  const handleSelect = (eventKey) => {
    navigate(`/Profile/Returns_order/${eventKey}`);
    setActiveTab(eventKey);
  };

  return (
    <div>
      <Container>
        <Tabs
          activeKey={activeTab}
          onSelect={handleSelect}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Order" title="Orders">
          {activeTab === 'Order' && <Order />}
          </Tab>

          <Tab eventKey="Delivered Products" title="Delivered Products">
          {activeTab === 'Delivered Products' && <Delivered_products />}

          </Tab>

          <Tab eventKey="Cancelled Products" title="Cancelled Products">
          {activeTab === 'Cancelled Products' && <Cancelled_product />}

          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Returns_order_skeleton;
