import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Sign_in = () => {

  const [error_messege , seterror_messege] = useState("")
  const {register,handleSubmit,formState:{errors},watch} = useForm()
  const Password = watch("Password")
  
  
  const send_form_data = async(formData) => { 
    try {
      const response = await axios.post("http://localhost:3001/auth/sign_in",{
         email:formData.Email,
         password:formData.Password
      })
      if(response){
        console.log(response)
      }
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <>
      <Container>
        <Row className="my-5">
          <Col md={6} className="d-flex align-items-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid mx-auto my-5"
              alt="Phone image"
              style={{ maxWidth: "100%", height: " auto" }}
            />
          </Col>

          <Col md={6} className="my-auto">
            <Form onSubmit={handleSubmit(send_form_data)}>
              <h3 className="text-center">Sign In</h3>


              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid Email format",
                    },
                  })}
                />
               {errors.Email && <p  className="text-danger small">{errors.Email.message}</p>}
              </div>


              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  {...register("Password", {
                    required: "password is required",
                    minLength: {
                      value: 5,
                      message: "password should have at least 5 characters"
                    }
                  })}
                />
                {errors.Password && <p  className="text-danger small">{errors.Password.message}</p>}
              </div>



              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label mx-1"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>


              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>

              </Form>

              <p className="forgot-password text-right my-2">
                Forgot <a href="#">password?</a>
              </p>
              <div className="text-center">
                <p>
                  Didn't have account ? <Link to="/Sign_up">Sign-Up</Link>
                </p>
                OR
              </div>

              <div className="text-center my-2">
                <p>Sign-in with</p>

                <div className="d-flex justify-content-center">
                <button className="px-2 py-1 bg-primary text-white border-0 rounded"> <i class="bi bi-telephone mx-1"></i>Phone Number</button>
                  <button className="px-2 py-1 bg-primary text-white border-0 rounded mx-3"> <i class="bi bi-google mx-1"></i>Google</button>
                  <button className="px-2 py-1 bg-primary text-white border-0 rounded"> <i class="bi bi-facebook mx-1"></i>Facebook</button>
                </div>
              </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sign_in;
