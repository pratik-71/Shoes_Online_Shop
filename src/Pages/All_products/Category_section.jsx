import React, { useEffect, useState } from "react";
import Shoe_card from "../../Components/Shoe_card";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useParams,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/Slices/ProductSlice";

const Category_section = () => {
   const {param} = useParams()
   const [categories,setcategories] = useState([])
   const [activeTab, setActiveTab] = useState(param);
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleTabSelect = (eventKey) => {
      setActiveTab(eventKey);
      dispatch(setCategory(activeTab))
      navigate(`/products/${eventKey}`);
      
    };



   const get_categories = async(req,res)=>{
   try {
      const response = await axios.get("http://localhost:3001/products/get_categories")
      if(categories){
         setcategories(response.data)
      }
   } catch (error) {
      console.log(error)
   }
}


useEffect(()=>{
   get_categories()
},[])

  return (
    <div>
      <Tabs
        defaultActiveKey={param}
        id="fill-tab-example"
        className="mb-3"
        onSelect={handleTabSelect}
        fill
      >
         <Tab eventKey={"All"} title={"All"}>
          {activeTab === 'All' &&  <Shoe_card selected_category={"All"}/>}
         </Tab>
        {
         categories.map((category,index)=>(
            <Tab key={index} eventKey={category} title={category}>
              { activeTab === param &&  <Shoe_card selected_category = {category}/>}
            </Tab>
         ))
        }
      
      </Tabs>
    </div>
  );
};

export default Category_section;