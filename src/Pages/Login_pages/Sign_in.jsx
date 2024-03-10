import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sign_in = () => {
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
            <form>
              <h3 className="text-center">Sign In</h3>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
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
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sign_in;
