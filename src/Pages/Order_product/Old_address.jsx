import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import "../Order_product/order.css";
import { useDispatch } from "react-redux";
import { setSelectedAddress } from "../../Redux/Slices/AddressSlice";
import { Link } from "react-router-dom";

const Old_address = () => {
  const dispatch = useDispatch();
  const [old_address, setOld_address] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const delete_address = async (id) => {
    try {
      const response = await axios.delete("http://localhost:3001/products/delete_address", {
        data: { id: id }
      });
      if (response) {
        console.log(response);
        get_address();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const get_address = async () => {
    try {
      const token = localStorage.getItem("Auth-Token");

      const response = await axios.get("http://localhost:3001/products/get_address", {
        headers: {
          "X-Auth-Token": token
        }
      });

      if (response) {
        console.log(response);
        setOld_address(response.data);

        // If there is no selected address and old addresses are available, set the first address as selected by default
        if (!selectedAddressId && response.data.length > 0) {
          setSelectedAddressId(response.data[0]._id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_address();
  }, []);

  const handleRadioChange = (id) => {
    setSelectedAddressId(id);
  };

  return (
    <>
      <div className="old_address">
        <h4 className="text-center">Use Old Address</h4>
        <FormGroup style={{ maxHeight: "60vh", overflow: "scroll" }}>
          <div className="mb-3 my-3 d-flex flex-column p-2">
            {old_address.map((add) => (
              <label key={add._id} className="address-option px-5 py-1 my-1">
                <input
                  type="radio"
                  name="group1"
                  checked={add._id === selectedAddressId}
                  style={{ marginRight: "10px" }}
                  onChange={() => handleRadioChange(add._id)}
                />
                <span>
                  <strong>Name -</strong> {add.fullname}, <strong>PH No. -</strong>{" "}
                  {add.phone_number}, <strong>State -</strong> {add.state}{" "}
                  <strong>District -</strong> {add.district}, <strong>City/Village -</strong>{" "}
                  {add.city_village}, <strong>Building/Vilalge -</strong>
                  {add.building_village}, <strong>Pincode -</strong> {add.pincode}
                </span>

                <button className="delete-button" onClick={() => delete_address(add._id)}>
                  <i className="bi bi-archive-fill"></i>
                </button>
              </label>
            ))}
          </div>
        </FormGroup>
        <div className="text-center my-2">
          <Link to="/order">
            <button
              onClick={() => {
                const selectedAddress = old_address.find((address) => address._id === selectedAddressId);
                dispatch(setSelectedAddress(selectedAddress));
              }}
              className="use-address-button px-5 py-2 rounded bg-primary border-0 text-white"
            >
              Use This Address
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Old_address;
