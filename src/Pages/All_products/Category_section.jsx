import React, { useEffect, useState } from "react";
import Shoe_card from "../../Components/Shoe_card";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

const Category_section = () => {
   const {param} = useParams()
   const [categories,setcategories] = useState([])
   const default_category = useSelector((state)=>state.products.category)
   console.log(default_category)
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
        fill
      >
         <Tab eventKey={"All"} title={"All"}>
            <Shoe_card selected_category={"All"}/>
         </Tab>
        {
         categories.map((category,index)=>(
            <Tab key={index} eventKey={category} title={category}>
                <Shoe_card selected_category = {category}/>
            </Tab>
         ))
        }
      
      </Tabs>
    </div>
  );
};

export default Category_section;
