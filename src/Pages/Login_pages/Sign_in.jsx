import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Sign_in = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="m-5">
          <Col md={6}>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid mx-auto d-block"
              alt="Phone image"
              style={{ maxWidth: "100%", height: "100px auto" }}
            />
          </Col>

          <Col md={6} className="my-auto">
            <form>
              <h3>Sign In</h3>
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
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sign_in;
