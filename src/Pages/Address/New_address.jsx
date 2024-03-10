import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { states } from "../../Data/Addresses";

const New_address = () => {
  const [selectedState, setselectedState] = useState("");
  const [selectedDistrict, setselectedDistrict] = useState([]);

  return (
    <>
      <div className="new_address">
        <Form>
          <h4 className="text-center my-2">Add New Address</h4>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full name"
            />
          </div>

        
              <Form.Select
                aria-label="Select State"
                onChange={(e) => setselectedState(e.target.value)}
              >
                <option>Select State</option>
                {states.map((data) => (
                  <option key={data.state} value={data.state}>
                    {data.state}
                  </option>
                ))}
              </Form.Select>
           
              <Form.Select
              className="my-3"
                aria-label="Select District"
                onChange={(e) => setselectedDistrict(e.target.value)}
              >
                <option>Select District</option>
                {states
                  .find((stateobj) => stateobj.state === selectedState)
                  ?.districts.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
              </Form.Select>
           

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City Name"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Village/ Complex"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default New_address;
