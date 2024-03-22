import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

const Old_address = () => {
  const [old_address, setold_address] = useState([]);

  const get_address = async (req, res) => {
    try {
      const token = localStorage.getItem("Auth-Token");
      const response = await axios.get(
        "http://localhost:3001/products/get_address",
        {
          headers: {
            "X-Auth-Token": token,
          },
        }
      );

      if (response) {
        console.log(response);
        setold_address(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_address();
  }, []);
  return (
    <>
      <div className="old_address">
        <h4 className="text-center">Use Old Address</h4>
        <FormGroup>
          <div className="mb-3 my-3 d-flex flex-column">
            {old_address.map((add) => (
              <label
                key={add.id} // Make sure to assign a unique key to each rendered element
                className="address-option px-5 py-1 my-1"
                style={{
                  border: "1px solid black",
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  name="group1"
                  defaultChecked
                  style={{ marginRight: "10px" }}
                />
                <span>
                 <strong> Name -</strong> {add.fullname},  <strong> PH No. -</strong> {add.phone_number}, 
                 <strong> State -</strong> {add.state}   <strong> District -</strong> {add.district},  <strong> City/Village -</strong> {add.city_village}, 
                 <strong> Building/Vilalge -</strong>{add.building_village},  <strong> Pincode -</strong> {add.pincode}
                </span>
                <span>
                 
                </span>
              </label>
            ))}

            <button className="use-address-button px-5 py-2 rounded bg-primary border-0 text-white">
              Use This Address
            </button>
          </div>
        </FormGroup>
      </div>
    </>
  );
};

export default Old_address;
