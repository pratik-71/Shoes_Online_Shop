import React, { useEffect, useState } from "react";
import Shoe_card from "../../Components/Shoe_card";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/Slices/ProductSlice";

const Category_section = () => {
  const { param } = useParams();
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(param);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
    dispatch(setCategory(eventKey));
    navigate(`/products/${eventKey}`);
  };

  const get_categories = async (req, res) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/products/get_categories"
      );
      if (response.data) {
        setCategories(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_categories();
  }, []);

  return (
    <>
      <div className="category-container">
        <Tabs
          defaultActiveKey={param}
          id="fill-tab-example"
          className="mb-3"
          onSelect={handleTabSelect}
          fill
        >
          <Tab eventKey={"All"} title={"All"}>
            {activeTab === "All" && <Shoe_card selected_category={"All"} />}
          </Tab>
          {categories.map((category, index) => (
            <Tab key={index} eventKey={category} title={category}>
              {activeTab === param && (
                <Shoe_card selected_category={category} />
              )}
            </Tab>
          ))}
        </Tabs>
      </div>

      <div className="d-md-none ml-3 mt-3">
        <select
          value={activeTab}
          onChange={handleTabSelect}
          className="form-select "
        >
          <option value={"All"}>All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Shoe_card selected_category={activeTab} />
      </div>
    </>
  );
};

export default Category_section;
