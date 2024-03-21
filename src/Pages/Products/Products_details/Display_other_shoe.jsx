import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Products_details/product.css";
import { useSelector } from "react-redux";

const Display_other_shoe = () => {
  const category =  useSelector((state) => state.products.product_details);
  const allProducts = useSelector((state) => state.products.products);
  
  const filteredProducts = category 
    ? allProducts.filter((data) => data.category === category.category) 
    : allProducts;
   
    

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
       <section className="my-5" >
        <Container>
          <div className="title">
            <h5 className="text-center"> You many also like </h5>
            <hr />
          </div>
          <div className="p-3 coursal_box ">
            <Carousel 
              responsive={responsive}
              infinite={true}
              customTransition="transform 500ms ease-in-out"
            >
              {filteredProducts.map((data, index) => (
                <div className="edition_card " key={index}>
                  <Card>
                    <img src={data.imageURL} className="img_holder" alt="Product" />
                    <Card.Body className="card-body">
                      <Card.Title className="info_info_section">{data.price}.00$ </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      <section className="my-5" >
        <Container>
          <div className="title">
            <h5> Explore in different category </h5>
            <hr />
          </div>
          <div className="p-3 coursal_box">
            <Carousel 
              responsive={responsive}
              infinite={true}
              customTransition="transform 500ms ease-in-out"
            >
              {filteredProducts.map((data, index) => (
                <div className="edition_card" key={index}>
                  <Card>
                    <img src={data.imageURL} className="img_holder" alt="Product" />
                    <Card.Body>
                      <Card.Title className="info_info_section">{data.price}.00$ </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Display_other_shoe;
