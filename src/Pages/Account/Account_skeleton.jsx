import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Returns_Order from './Returns_Order'
import Cart from './Cart'
import My_Account from './My_Account'

const Account_skeleton = () => {
  return (
    <div>
      <Container>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="My Account" title="My Account">
        <My_Account/>
      </Tab>
      <Tab eventKey="Return and Order" title="Return and Order">
       <Returns_Order/>
      </Tab>
      <Tab eventKey="Cart" title="Cart">
        <Cart/>
      </Tab>
    </Tabs>
      </Container>
    </div>
  )
}

export default Account_skeleton
