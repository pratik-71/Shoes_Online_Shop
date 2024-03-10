import React from "react";
import { Accordion, Button } from "react-bootstrap";

const Display_accordination = () => {
  return (
    <>
      <Accordion defaultActiveKey="0" flush className="my-4">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Product details</Accordion.Header>
          <Accordion.Body>
            <p><strong>Category : </strong> OXY Air </p>
            <p><strong>Material Used : </strong> 100% Lether </p>
            <p><strong>Marketed by : </strong> OXY global marketting co. </p>
            <p><strong>Manufactured in : </strong> India Maharashtra varoli sector </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Delivery and Returns</Accordion.Header>
          <Accordion.Body>
          <p><strong>OXY members can enjoy free delivery and returns. </strong> Terms and condition apply</p>
          <p>Delievery is available within 3-9  business days</p>
          <p>Get expected delievery time</p>
          <div className="d-flex" >
                <input
                  type="text"
                  rounded
                  placeholder="Enter pincode"
                  className="form-control search-input b-0 w-50"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <Button
                  variant="outline-success"
                  id="button-addon2"
                  className="bg-primary mx-3"
                >
                 Search
                </Button>
              </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
          
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Display_accordination;
