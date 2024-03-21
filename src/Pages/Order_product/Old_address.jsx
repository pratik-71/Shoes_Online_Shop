import React from "react";
import { Form, FormGroup } from "react-bootstrap";

const Old_address = () => {
  return (
    <>
      <div className="old_address">
        <h4 className="text-center">Use Old Address</h4>
        <FormGroup>
          <div className="mb-3 my-3 d-flex flex-column">
            <label className="address-option px-5 py-1 my-1" style={{ border: "1px solid black", borderRadius: "25px", display: "flex", alignItems: "center" }}>
              <input type="radio" name="group1" defaultChecked style={{ marginRight: "10px" }} />
              <span>Pratik Dabhade, maharashtra, Raigad, Karjat</span>
            </label>

            <label className="address-option px-5 py-1 my-1" style={{ border: "1px solid black", borderRadius: "25px", display: "flex", alignItems: "center" }}>
              <input type="radio" name="group1" style={{ marginRight: "10px" }} />
              <span>Pratik Dabhade, maharashtra, Raigad, Karjat, Arihant Building, Bhisegaon Road, 410201</span>
            </label>

            <button className="use-address-button px-5 py-2 rounded bg-primary border-0 text-white">Use This Address</button>
          </div>
        </FormGroup>
      </div>
    </>
  );
};

export default Old_address;
