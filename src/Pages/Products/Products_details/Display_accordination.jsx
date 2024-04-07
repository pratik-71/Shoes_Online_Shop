import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Display_accordination = () => {
  const productInfo = useSelector((state) => state.products.product_info);

  return (
    <>
      <Accordion defaultActiveKey="0" flush className="my-1">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Product details</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>Category : </strong> OXY Air{" "}
            </p>
            <p>
              <strong>Material Used : </strong> 100% Leather{" "}
            </p>
            <p>
              <strong>Marketed by : </strong> OXY global marketing co.{" "}
            </p>
            <p>
              <strong>Manufactured in : </strong> India Maharashtra varoli
              sector{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Delivery and Returns</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>OXY members can enjoy free delivery and returns. </strong>{" "}
              Terms and condition apply
            </p>
            <p>Delivery is available within 3-9 business days</p>
            <p>Get expected delivery time</p>
            <div className="d-flex">
              <input
                type="text"
                rounded
                placeholder="Enter pincode"
                className="form-control search-input b-0 w-50"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <Button
                variant="outline-success"
                id="button-addon2"
                className="bg-primary mx-3"
              >
                Search
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            <div className="show_review">
              {productInfo && productInfo.reviews && productInfo.reviews.length > 0 ? (
                productInfo.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column review_card flex-column"
                  >
                    <div>
                      <h6>{review.name}</h6>
                    </div>
                    <div>
                      {[...Array(review.rating)].map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <i
                          key={i + review.rating}
                          className="bi bi-star"
                          style={{ color: "gold" }}
                        ></i>
                      ))}
                    </div>
                    <div>
                      <p className="px-3">{review.review}</p>
                    </div>
                    <hr></hr>
                  </div>
                ))
              ) : (
                <p>No reviews available</p>
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Display_accordination;
