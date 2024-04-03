import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Update_product = () => {
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

  const { id } = useParams();
  const [forminfo, setForminfo] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    get_product();
  }, []);

  const get_product = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/get_product/${id}`
      );
      if (response) {
        setForminfo(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const send_form_data = async (formData) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/products/update_product", {
          id:id,
          imageURL:formData.Image_url,
          title:formData.Product_name,
          description:formData.Description,
          price:formData.Price,
          category:formData.ProductCategory,
          color:formData.Color,
          gender:formData.Gender,
          Available_items:formData.Available_items
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForminfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="my-4">
            <div className="text-center">
              <h4>Update Product</h4>

              <Form onSubmit={handleSubmit(send_form_data)}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="imageURL"
                    value={forminfo.imageURL}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Image URL"
                    {...register("Image_url", {
                      required: "Image URL is required",
                    })}
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
                    name="title"
                    value={forminfo.title || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder=" Enter Product Name"
                    {...register("Product_name", {
                      required: "Product_name",
                      minLength: {
                        value: 3,
                        message:
                          "Product name should have at least 3 characters",
                      },
                    })}
                  />
                   {errors.Product_name && (
                    <p className="text-danger small">
                      {errors.Product_name.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Form.Select
                    name="category"
                    value={forminfo.category || ""}
                    onChange={handleChange}
                    aria-label="Select Product Category"
                    {...register("ProductCategory", {
                      required: "Product category is required",
                    })}
                  >
                    <option></option>
                    {productCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.ProductCategory && (
                    <p className="text-danger small">
                      {errors.ProductCategory.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Form.Select
                    value={forminfo.color || ""}
                    aria-label="Select Color"
                    {...register("Color", {
                      required: "Color is required",
                    })}
                  >
                    <option value="" disabled>Select color</option>
                    {["White","Grey","Red","Mint","Blue","Green","Brown","Pink","Black","Saffron","Aqua","Yellow","Purple"]
                    .map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.Color && (
                    <p className="text-danger small">
                      {errors.Color.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Form.Select
                    value={forminfo.gender || ""}
                    aria-label="Select Gender"
                    {...register("Gender", {
                      required: "Gender is required",
                    })}
                  >
                    <option value="" disabled>Select Gender</option>
                    {["Male","Women","All"].map((gender, index) => (
                      <option key={index} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.Gender && (
                    <p className="text-danger small">
                      {errors.Gender.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    value={forminfo.price || ""}
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
                    value={forminfo.available_items || ""}
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
                    value={forminfo.description || ""}
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
                  Update Product
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Update_product;
