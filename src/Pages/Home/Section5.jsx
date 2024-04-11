import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/Home_Section.css";

import cr7_shoe from "../../Assets/Section 5 Customise_shoes/shoe.png";
import { Select_shoe } from "../../Data/Select_shoe";

const Section5 = () => {
  const [shoe_image, setShoe_image] = useState(cr7_shoe);

  const changeImg = (data) => {
    setShoe_image(data.image);
  };

  return (
    <section>
      <Container className="customise_section my-5">
        <h4 className="text-center my-2">
          SHOW YOUR CREATIVITY AND CUSTOMISE YOUR SNEAKERS
        </h4>
        <Row>
          <Col xs={12} md={6} sm={3}>
            <img
              src={shoe_image}
              alt="shoes"
              className="img-fluid my-3 mx-auto"
            />
          </Col>
          <Col xs={12} md={6} className="py-3 customise_info_col">
            <div className="shoe_img_select">
              {Select_shoe.map((data) => (
                <div className="select_images" key={data.id}>
                  <button
                    className="select_img_btn"
                    onClick={() => changeImg(data)}
                  >
                    <img src={data.image} alt="shoe" />
                  </button>
                </div>
              ))}
            </div>
            <ul>
              <li>Send us your design and Apply it on shoes</li>
              <li>Full customisation on shoe colors of your own choice</li>
              <li>Add your name tag on shoe and many more</li>
              <li>Your can also add design on shoes including sole</li>
            </ul>
            <p className="py-3">
              Whether you're remixing a classic into something never seen
              before or simplifying the latest drop into a totally neutral
              palette, your customisation journey starts with choosing shoe.
              Luckily, we're always adding newness,find the just-right way to
              express your style.
            </p>
            <div style={{ lineHeight: "1" }}>
              <i>
                Note - terms and conditions apply for you each modification and
                depending on it cost will also increase and some changes can
                also lead to reduction in quality of shoe
              </i>
            </div>
           <div className="text-center">
           <button className="px-3 py-1 my-1 mx-auto customising_btn">
              Start customising
            </button>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section5;
