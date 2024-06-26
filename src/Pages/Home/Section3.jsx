import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/Home_Section.css";
import shoe_left from "../../Assets/Section3_Sepcs_page/shoes_left.jpg";
import shoe_right from "../../Assets/Section3_Sepcs_page/shoes_right.jpg";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <section className="my-5">
      <Container className="specs_section py-4 ">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={4} className="text-center">
            <img src={shoe_left} alt="left shoe" className="img-fluid" />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <div>
              <h1>Feel the Supiority</h1>
              <h3>With OXY</h3>
              <p>
                Experience the epitome of luxury in every step with our latest
                shoe collection. Meticulously crafted for both style and
                comfort, our shoes redefine elegance and performance. Whether
                you're navigating city streets or commanding the boardroom, our
                footwear ensures you stride with confidence and grace. Elevate
                your look and elevate your game with OXY.
              </p>
              <Link to="/about">
                <button className="py-2 px-4">Know More</button>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <img src={shoe_right} alt="right shoe" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section3;
