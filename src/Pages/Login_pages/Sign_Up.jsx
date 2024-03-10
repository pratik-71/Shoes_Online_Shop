import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import sign_up  from "../../Assets/login/sign up.jpg"
import { useForm } from 'react-hook-form'

const Sign_Up = () => {

const [error_messege , seterror_messege] = useState("")
const {register,handleSubmit,formState:{errors},watch} = useForm()
const Password = watch("Password")


const send_form_data = () => { }

  return (
    <div>
       <Container className="my-5">
        <Row className="m-5">
          <Col md={6}>
            <img
              src={sign_up}
              className="img-fluid mx-auto d-block"
              alt="Phone image"
              style={{ maxWidth: "100%", height: " auto" }}
            />
          </Col>

          <Col md={6} className="my-auto">
            <Form onSubmit={handleSubmit(send_form_data)}>
              <h3 className="text-center my-2">Sign Up</h3>


              <div className="mb-3">
              <input
                  type="text"
                  className="form-control"
                  {...register("Firstname", {
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "First name should have at least 3 characters"
                    },
                    maxLength:{
                      value:10,
                      message:"First name character should not exceed 10 characters"
                    }
                  })}
                  placeholder="Enter First name"
                />
                {errors.Firstname && <p  className="text-danger small">{errors.Firstname.message}</p>}
              </div>




              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                  {...register("Lastname", {
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "Last name should have at least 3 characters"
                    },
                    maxLength:{
                      value:10,
                      message:"Last name character should not exceed 10 characters"
                    }
                  })}
                />
                 {errors.Lastname && <p  className="text-danger small">{errors.Lastname.message}</p>}
              </div>



              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  {
                    ...register("Phone_number",{
                      required:"Phone number is required",
                      min: {
                        value: 1000000000,
                        message: "Phone Number must be at least 10 digits long",
                      },
                      max: {
                        value: 9999999999,
                        message: "Phone Number must not exceed 10 digits",
                      }
                    })
                  }
                />
                {errors.Phone_number && <p  className="text-danger small">{errors.Phone_number.message}</p>}
              </div>



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
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter same password"
                  {...register("conPassword", {
                    required: "password is required",
                    validate:(value)=> value === Password || "Confirm password should be same as Password"
                  })}
                />
                {errors.conPassword && <p  className="text-danger small">{errors.conPassword.message}</p>}
              </div>


              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>


              <div className="text-center my-2">
                <p>
                  Didn't have account ? <Link to="/Sign_in">Sign-In</Link>
                </p>
                OR
              </div>

              <div className="text-center">
                <p>Sign-in with</p>

                <div className="d-flex justify-content-center">
                <button className="px-2 py-1 bg-primary text-white border-0 rounded"> <i class="bi bi-telephone mx-1"></i>Phone Number</button>
                  <button className="px-2 py-1 bg-primary text-white border-0 rounded mx-3"> <i class="bi bi-google mx-1"></i>Google</button>
                  <button className="px-2 py-1 bg-primary text-white border-0 rounded"> <i class="bi bi-facebook mx-1"></i>Facebook</button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sign_Up
