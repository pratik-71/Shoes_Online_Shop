import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import sign_up  from "../../Assets/login/sign up.jpg"

const Sign_Up = () => {
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
            <form>
              <h3 className="text-center my-2">Sign Up</h3>


              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First name"
                />
              </div>


              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                />
              </div>


              <div className="mb-3">
                <input
                  max={10}
                  min={10}
                  type="number"
                  className="form-control"
                  placeholder="Enter Phone Number"
                />
              </div>


              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>


              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>


              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>


              <div className="text-center my-4">
                <p>
                  Didn't have account ? <Link to="/Sign_in">Sign-In</Link>
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
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sign_Up
