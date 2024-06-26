import React from "react";
import { Card, Container } from "react-bootstrap";
import coursal from "../../Data/Coursal_section_2";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../Styles/Home_Section.css";
import { Link } from "react-router-dom";

const Section2 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1110 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 516 },
      items: 2,
    },
    small_mobile: {
      breakpoint: { max: 515, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="my-3">
      <Container>
        <div className="title">
          <h3 className="text-center special_edition">- SPECIAL EDITION -</h3>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          customTransition="transform 500ms ease-in-out"
          containerClass="carousel-container"
        >
          {coursal.map((data, index) => (
            <div className="edition_card mx-auto" key={index}>
              <Card>
                <img
                  src={data.image}
                  className="img_holder"
                  alt={data.title}
                  style={{ height: "50vh" }}
                />
                <Card.Body>
                  <Card.Title className="info_info_section">
                    {data.title}
                  </Card.Title>

                  <div className="info_btn_section">
                    <Link to={`/product_details/${data.redirect_id}`}>
                      <button className="py-1 px-3 mx-2 info-btn">Buy Now</button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line mx-3"></div>
          <button className="px-4 py-1 my-3 more_btn">More</button>
          <div className="line mx-3"></div>
        </div>
      </Container>
    </section>
  );
};

export default Section2;
