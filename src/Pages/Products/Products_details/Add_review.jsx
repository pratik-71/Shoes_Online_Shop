import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const Add_review = () => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);

  const handleStarClick = (star) => setRating(star);
  const handleClose = () => {
    setShow(false);
    setRating(0);
  };
  const handleShow = () => setShow(true);

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
        <Row>
          <label>5 Star</label>
          <ProgressBar now={70} variant="warning" visuallyHidden />
        </Row>
        <Row>
          <label>4 Star</label>
          <ProgressBar now={40} variant="warning" visuallyHidden />
        </Row>
        <Row>
          <label>3 Star</label>
          <ProgressBar now={30} variant="warning" visuallyHidden />
        </Row>
        <Row>
          <label>2 Star</label>
          <ProgressBar now={25} variant="warning" visuallyHidden />
        </Row>
        <Row>
          <label>1 Star</label>
          <ProgressBar now={35} variant="warning" visuallyHidden />
        </Row>
        <Row>
          <button
            onClick={handleShow}
            className="text-center rounded bg-primary text-white border-0 my-4 py-1"
          >
            {" "}
            Add Review
          </button>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <div>{renderStars()}</div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Add Review here"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between mx-3">
          <Button className="bg-danger border-0" onClick={handleClose}>
            Close
          </Button>
          <Button className="bg-success " onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add_review;
