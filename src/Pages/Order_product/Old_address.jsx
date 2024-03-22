import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import "../Order_product/order.css"

const Old_address = () => {
  const [old_address, setOld_address] = useState([]);

  const get_address = async () => {
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
        setOld_address(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_address();
  }, []);

  const handleDeleteAddress = (id) => {
    console.log("Deleting address with id:", id);
  };

  return (
    <>
      <div className="old_address">
        <h4 className="text-center">Use Old Address</h4>
        <FormGroup style={{ height: "60vh", overflow: "scroll" }}>
          <div className="mb-3 my-3 d-flex flex-column p-2">
            {old_address.map((add) => (
              <label
                key={add.id}
                className="address-option px-5 py-1 my-1"
              >
                <input
                  type="radio"
                  name="group1"
                  defaultChecked
                  style={{ marginRight: "10px" }}
                />
                <span>
                  <strong>Name -</strong> {add.fullname}, <strong>PH No. -</strong>{" "}
                  {add.phone_number}, <strong>State -</strong> {add.state}{" "}
                  <strong>District -</strong> {add.district}, <strong>City/Village -</strong>{" "}
                  {add.city_village}, <strong>Building/Vilalge -</strong>
                  {add.building_village}, <strong>Pincode -</strong> {add.pincode}
                </span>
               
                <button
                  className="delete-button"
                  onClick={() => handleDeleteAddress(add.id)}
                >
                 <i class="bi bi-archive-fill"></i>
                </button>
              </label>
            ))}
          </div>
        </FormGroup>
        <div className="text-center my-2">
          <button className="use-address-button px-5 py-2 rounded bg-primary border-0 text-white">
            Use This Address
          </button>
        </div>
      </div>
    </>
  );
};

export default Old_address;
