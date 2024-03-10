import React from "react";
import { Card, Container } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Products_details/product.css";
import { Air } from "../../../Data/Shoe_data";

const Display_other_shoe = () => {
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
      breakpoint: { max: 809, min: 516 },
      items: 2,
    },
    small_mobile: {
      breakpoint: { max: 516, min: 0 },
      items: 1,
    }
  };

  return (
    <>
    <section className="my-3">
    <Container>
        <div className="title">
          <h4 className="text-center"> You many also like </h4>
          <hr></hr>
        </div>
        <Carousel 
          responsive={responsive}
          infinite={true}
          customTransition="transform 500ms ease-in-out"
        >
          {Air.map((data, index) => (
            <div className="edition_card" key={index}>
              <Card>
                <img src={data.image} className="img_holder"  />
                <Card.Body>
                  <Card.Title className="info_info_section">{data.price} </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
      
    </>
  );
};

export default Display_other_shoe;
