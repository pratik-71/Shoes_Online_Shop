import React, { useState, useEffect } from "react";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import { useSelector } from "react-redux";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  const productInfo = useSelector((state) => state.products.product_info);
  const [starPercentages, setStarPercentages] = useState([]);

  useEffect(() => {
    if (productInfo && productInfo.reviews) {
      const totalReviews = productInfo.reviews.length;
      const starCount = [0, 0, 0, 0, 0];

      productInfo.reviews.forEach((review) => {
        // Increment the count of the respective star rating
        starCount[review.rating - 1]++;
      });

      const percentages = starCount.map((count) =>
        totalReviews > 0 ? (count / totalReviews) * 100 : 0
      );
      setStarPercentages(percentages);
    }
  }, [productInfo]);

  const handleStarClick = (star) => setRating(star);
  const handleClose = () => {
    setShow(false);
    setRating(0);
  };
  const handleShow = () => setShow(true);

  const onSubmit = async (formData) => {
    try {
      const jwttoken = localStorage.getItem("Auth-Token");
      const response = axios.post(
        "http://localhost:3001/products/add_review",
        {
          product_id: id,
          review: formData.review,
          star: rating,
        },
        {
          headers: {
            "X-Auth-Token": jwttoken,
          },
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
    handleClose();
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{ cursor: "pointer" }}
        >
          {i <= rating ? (
            <i className="bi bi-star-fill " style={{ color: "gold" }}></i>
          ) : (
            <i className="bi bi-star"></i>
          )}
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <Container>
        <Row>
          <h6>Product Reviews</h6>
        </Row>
        {[5, 4, 3, 2, 1].map((star, index) => (
          <Row key={star}>
            <label>{star} Star</label>
            <ProgressBar
              now={starPercentages[4 - index]}
              variant="warning"
              visuallyHidden
            />
          </Row>
        ))}
        <Row>
          <button
            onClick={handleShow}
            className="text-center rounded bg-primary text-white border-0 my-4 py-1"
          >
            Add Review
          </button>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <div>{renderStars()}</div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Add Review here"
                {...register("review", { required: true })}
                rows={3}
              />
              {errors.review && <span>This field is required</span>}
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <Button className="bg-danger border-0" onClick={handleClose}>
                Close
              </Button>
              <Button className="bg-success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddReview;
