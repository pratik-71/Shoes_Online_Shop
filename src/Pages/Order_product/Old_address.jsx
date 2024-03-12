import React from "react";
import { Form } from "react-bootstrap";

const Old_address = () => {
  return (
    <>
      <div className="old_address">
        <h4 className="text-center">Use Old Address</h4>
        <Form>
          <div className="mb-3 my-3 text-center d-flex flex-column">
            <Form.Check
              style={{ border: "1px solid black", borderRadius: "25px" }}
              className="px-5 py-1 my-1"
              type="radio"
              inline
              label="Pratik Dabhade, maharashtra, Raigad, Karjat"
              name="group1"
            />

            <Form.Check
              style={{ border: "1px solid black", borderRadius: "25px" }}
              className="px-5 py-1 my-1"
              type="radio"
              inline
              label="Pratik Dabhade, maharashtra, Raigad, Karjat"
              name="group1"
            />

            <button className="mx-auto my-2 px-5 py-2 rounded bg-primary border-0 text-white">Use This Address</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Old_address;
