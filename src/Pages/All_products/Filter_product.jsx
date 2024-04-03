import React, { useState } from "react";
import {
  Accordion,
  Form
} from "react-bootstrap";
import { Colors } from "../../Data/Colors";
import { useDispatch } from "react-redux";
import { setFilter_products, setRange_filter, setColor_filter, setGender_filter } from "../../Redux/Slices/ProductSlice";

const Filter_product = () => {
  const dispatch = useDispatch()
  const [maxValue, setMaxValue] = useState(500);
  const [selectedColor, setSelectedColor] = useState("");

  const handleRangeChange = (event) => {
    setMaxValue(parseInt(event.target.value));
    dispatch(setRange_filter(event.target.value))
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    dispatch(setColor_filter(color))
  };


  return (
    <>
      <h5 className="text-center">Filter Products</h5>

      <Accordion defaultActiveKey="0" flush className="my-4">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <Form>
              <div className="mb-3 my-3">
                <Form.Check
                  type="radio"
                  inline
                  label="High to Low"
                  name="group1"
                  onChange={()=>dispatch(setFilter_products("HighTOLow"))}
                />
                <Form.Check
                  type="radio"
                  inline
                  label="Low to High"
                  name="group1"
                  onChange={()=>dispatch(setFilter_products("LowToHigh"))}
                />
                <Form.Check type="radio" 
                inline label="Default" 
                name="group1"
                onChange={()=>dispatch(setFilter_products("Defualt"))} />
                
                <div className="price_range d-flex justify-content-between">
                  <Form.Label> Select Maximum Price</Form.Label>
                  <span>{maxValue}</span>
                </div>
                <Form.Range
                  value={maxValue}
                  onChange={handleRangeChange}
                  max={800}
                />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>



        <Accordion.Item eventKey="2">
          <Accordion.Header>Availability</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Check
                type="radio"
                inline
                label="New Arrivals"
                name="group2"
              />
              <Form.Check type="radio" inline label="Old Stock" name="group2" />
              <Form.Check type="radio" inline label="Default" name="group2" />
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Shoe Color</Accordion.Header>
          <Accordion.Body>
            <div className="size-buttons d-flex flex-wrap box">
              <button className="my-1 btn rounded-circle size-button"
              style={{ height:"40px"}}>
                All</button>
              {Colors.map((color) => (
                <button
  
                  className={`my-1 btn rounded-circle size-button ${
                    selectedColor === color.name ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color.color, height:"40px", border: selectedColor === color.name ? "3px solid black" : "1px solid black"}}
                  onClick={() => handleColorChange(color.title)}
                ></button>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body>
          <Form>
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  inline
                  label="Men"
                  onChange={()=>dispatch(setGender_filter("Male"))}
                  name="group3"
                /><br></br>
                <Form.Check
                  type="radio"
                  inline
                  label="Women"
                  onChange={()=>dispatch(setGender_filter("Women"))}
                  name="group3"
                /><br></br>
                 <Form.Check
                  type="radio"
                  inline
                  label="Unisex"
                  onChange={()=>dispatch(setGender_filter("All"))}
                  name="group3"
                />
                </div>
             </Form>   
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </>
  );
};

export default Filter_product;
