import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Form } from "react-router-dom";

const My_Account = () => {
  const [data, setdata] = useState({});

  const get_data = async () => {
    try {
      const jwttoken = localStorage.getItem("Auth-Token");
      const response = await axios.get("http://localhost:3001/auth/profile", {
        headers: {
          "X-Auth-Token": jwttoken,
        },
      });

      if (response) {
        setdata(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-between">
            <h4>
              Hii, {data.firstname} {data.lastname}
            </h4>
            <button className="px-3 py-1 rounded bg-warning">
              Edit Profile
            </button>
          </div>
        </Row>



        <Row md={2} className="d-flex flex-column justify-content-center align-items-center">
          <h6 className="text-center">Edit profile</h6>

          
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="email"
              className="form-control "
              value={data.firstname}
            />
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="email"
              className="form-control"
              value={data.lastname}
            />
          </div>

          <div className="mb-3">
            <label>Phone number</label>
            <input
              type="email"
              className="form-control"
              value={data.phone_number}
            />
          </div>


          <div className="mb-3">
            <label>email</label>
            <input
              type="email"
              className="form-control"
              value={data.email}
            />
          </div>

          <button className="rounded bg-warning py-1">Update Profile</button>

          
        </Row>
      </Container>
    </div>
  );
};

export default My_Account;
