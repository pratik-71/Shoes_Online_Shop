import axios  from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Display_accordination = () => {
  const { id } = useParams();
  const [review,setreview] = useState([])


  const get_review = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products/get_review", {
        params: { product_id: id }
      });
      if (!response.data) {
        console.log("No data found in the response");
      } else {
        console.log("Reviews retrieved successfully:", response.data);
        setreview(response.data.reviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  

  useEffect(() => {
    get_review();
  }, []);


  return (
    <>
      <Accordion defaultActiveKey="0" flush className="my-1">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Product details</Accordion.Header>
          <Accordion.Body>
            <p><strong>Category : </strong> OXY Air </p>
            <p><strong>Material Used : </strong> 100% Lether </p>
            <p><strong>Marketed by : </strong> OXY global marketting co. </p>
            <p><strong>Manufactured in : </strong> India Maharashtra varoli sector </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Delivery and Returns</Accordion.Header>
          <Accordion.Body>
          <p><strong>OXY members can enjoy free delivery and returns. </strong> Terms and condition apply</p>
          <p>Delievery is available within 3-9  business days</p>
          <p>Get expected delievery time</p>
          <div className="d-flex" >
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
      {review.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        review.map((data, index) => (
          <div key={index} className="d-flex flex-column review_card flex-column">
            <div><h6>{data.name}</h6></div>
            <div>
              {[...Array(data.rating)].map((_, i) => (
                <i key={i} className="bi bi-star-fill" style={{ color: "gold" }}></i>
              ))}
              {[...Array(5 - data.rating)].map((_, i) => (
                <i key={i + data.rating} className="bi bi-star" style={{ color: "gold" }}></i>
              ))}
            </div>
            <div>
              <p className="px-3">{data.review}</p>
            </div>
            <hr></hr>
          </div>

        ))
      )}
    </div>
  </Accordion.Body>
</Accordion.Item>

      </Accordion>
    </>
  );
};

export default Display_accordination;
