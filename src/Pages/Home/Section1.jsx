import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../Styles/Home_Section.css";

import promotion_shoes from "../../Data/Main_page_shoes";

const Section1 = () => {
  return (
    <>
      <section className="main_section my-1">
        <Container>
          <Row>
            <Col className="mb-2 mb-lg-0">
              <img
                src="https://freepngimg.com/convert-png/27428-nike-shoes-transparent-background"
                alt="shoe-image"
                className="img-fluid my-5"
                style={{ maxWidth: "auto", height: "auto" }}
              />
            </Col>
            <Col lg={6} className="info">
              <Row>
                <div className="text-center">
                  <h1>OXY AIR</h1>
                  <h4 className="text-primary">
                    THIS TIME UNLOCK YOUR TRUE POTENTIAL
                  </h4>
                  <p className="px-4 m-4  ">
                    Inspired by the sky's dynamic nature, the AJ1 blends
                    leather, suede, and textiles, creating a harmonious blend of
                    texture and tone. With its celestial blue hue, it embodies
                    the essence of the heavens. Step into these sneakers and
                    embark on a journey where style meets the stormy skies,
                    unlocking your inner celestial elegance.
                  </p>
                  <p className="price">$20.17</p>
                  <Link  to="/product_details/661289fedbe4ce59688fc234">
                    <button className="px-4 py-2">Buy Now</button>
                  </Link>
                </div>
              </Row>

              <Row className="my-4 text-center">
                <div className="shoe_promotion">
                {promotion_shoes.map((shoe) => (
                  <Card  key={shoe.id} className="card">
                    <Card.Img
                      className="img img-fluid ms-auto"
                      variant="top"
                      src={shoe.image}
                    />
                    <Card.Body>
                      <Card.Title>{shoe.title}</Card.Title>
                      <Card.Text >
                        {shoe.price}
                        <Link to={`/product_details/${shoe.redirect_id}`}>
                        <button className="py-1 px-3 mx-2 bg-primary"><i class="bi bi-cart-fill mx-2"></i></button>
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section1;
