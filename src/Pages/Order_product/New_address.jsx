import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { states } from "../../Data/Addresses";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSelectedAddress } from "../../Redux/Slices/AddressSlice";

const New_address = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedState, setselectedState] = useState("");
  const [selectedDistrict, setselectedDistrict] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const send_form_address = async(formData)=>{
    const jwttoken = localStorage.getItem("Auth-Token")
    try {
      const response = await axios.post("http://localhost:3001/products/add_address",{
        fullname : formData.Fullname,
        phone_number:formData.Phone_number,
        state:selectedState,
        district:selectedDistrict,
        pincode:formData.Pincode,
        city_village:formData.City_village_name,
        building_village:formData.House_building_name
      },{
        headers:{
          "X-Auth-Token" : jwttoken
        }
       
      })

      if(response){
        dispatch(setSelectedAddress(response.data))
        navigate("/order")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="new_address">
        <Form onSubmit={handleSubmit(send_form_address)}>
          <h4 className="text-center my-2">Add New Address</h4>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full name"
              {...register("Fullname", {
                required: "Fullname is required",
              })}
            />
            {errors.Fullname && (
                    <p className="text-danger small ">
                      {errors.Fullname.message}
                    </p>
            )}
          </div>


          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone Number"
              {...register("Phone_number", {
                required: "Phone number is required",
              })}
            />
            {errors.Phone_number && (
                    <p className="text-danger small">
                      {errors.Phone_number.message}
                    </p>
            )}
          </div>

        
              <Form.Select
                aria-label="Select State"
                onChange={(e) => setselectedState(e.target.value)}
                
              >
                <option >Select State</option>
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
              type="number"
              className="form-control"
              placeholder="Enter PIN code"
              {...register("Pincode", {
                required: "Pincode is required",
              })}
            />
             {errors.Pincode && (
                    <p className="text-danger small">
                      {errors.Pincode.message}
                    </p>
            )}
          </div>
           

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City/Village Name"
              {...register("City_village_name", {
                required: "City/village_name is required",
              })}
            />
             {errors.City_village_name && (
                    <p className="text-danger small">
                      {errors.City_village_name.message}
                    </p>
            )}
          </div>


          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Building/House name"
              {...register("House_building_name", {
                required: "House/building name is required",
              })}
            />
             {errors.House_building_name && (
                    <p className="text-danger small">
                      {errors.House_building_name.message}
                    </p>
            )}
          </div>

            <div className="d-grid">      
           <button  type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default New_address;
