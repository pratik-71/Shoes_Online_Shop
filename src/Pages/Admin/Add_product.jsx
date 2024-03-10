import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Add_product = () => {
  const productCategories = [
    "Special Edition",
    "premium",
    "Mercurial",
    "Air",
    "Jordan",
    "Runner",
    "Flexo",
    "other",
  ];
  const [error_message, set_error_message] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const send_form_data = () => {};

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="my-4">
            <div className="text-center">
              <h4>Add Product</h4>
              <Form onSubmit={handleSubmit(send_form_data)}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    {...register("Image_url", {
                      required: "Image URL is required",
                    })}
                    placeholder="Enter Image URL"
                  />
                  {errors.Image_url && (
                    <p className="text-danger small">
                      {errors.Image_url.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    {...register("Product_name", {
                      required: "Product_name",
                      minLength: {
                        value: 3,
                        message:
                          "Product name should have at least 3 characters",
                      },
                    })}
                    placeholder=" Enter Product Name"
                  />
                  {errors.Product_name && (
                    <p className="text-danger small">
                      {errors.Product_name.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Form.Select
                    aria-label="Select Product Category"
                    {...register("productCategory", {
                      required: "Product category is required",
                    })}
                  >
                    <option value="">Select Product Category</option>
                    {productCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.productCategory && (
                    <p className="text-danger small">
                      {errors.productCategory.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    {...register("Price", { required: "Price is required" })}
                    placeholder="Price"
                  />
                  {errors.Price && (
                    <p className="text-danger small">{errors.Price.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    {...register("Available_items", {
                      required: "Available items is required",
                    })}
                    placeholder="Enter Available items"
                  />
                  {errors.Available_items && (
                    <p className="text-danger small">
                      {errors.Available_items.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    {...register("Description", {
                      required: "Description is required",
                    })}
                    placeholder=" Enter Description"
                  />
                  {errors.Description && (
                    <p className="text-danger small">
                      {errors.Description.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn btn-primary px-5">
                  Add Product
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Add_product;
