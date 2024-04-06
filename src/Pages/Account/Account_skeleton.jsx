import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Cart from './Cart';
import My_Account from './My_Account';
import { useParams, useNavigate } from 'react-router-dom';
import Returns_order_skeleton from './Returns_order_skeleton';

const Account_skeleton = () => {
  const { param } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(param);

  const handleTabSelect = (eventKey) => {
    navigate(`/Profile/${eventKey}`);
    setActiveTab(eventKey);
  };

  return (
    <div>
      <Container>
        <Tabs
        fill
          activeKey={activeTab}
          onSelect={handleTabSelect} 
          id="controlled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Account" title="My Account">
            {activeTab === 'Account' && <My_Account />}
          </Tab>
          <Tab eventKey="Returns_order" title="Return and Order">
            {activeTab === 'Returns_order' && <Returns_order_skeleton/>}
          </Tab>
          <Tab eventKey="Cart" title="Cart">
            {activeTab === 'Cart' && <Cart />}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Account_skeleton;
