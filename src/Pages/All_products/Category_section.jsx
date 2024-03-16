import React, { useEffect, useState } from "react";
import { Air, Women, mercurial, premium } from "../../Data/Shoe_data";
import Shoe_card from "../../Components/Shoe_card";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";

const Category_section = () => {

   const [categories,setcategories] = useState([])

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
        defaultActiveKey="All"
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
        {/* <Tab eventKey="Special Edition" title="Special Edition">
           <Shoe_card data={premium} /> 
        </Tab>
        <Tab eventKey="Premium" title="Premium">
           <Shoe_card data={premium} /> 
        </Tab>
        <Tab eventKey="Air" title="Air">
           <Shoe_card data={Air} /> 
        </Tab>
        <Tab eventKey="Jordan" title="Jordan">
           <Shoe_card data={Air} /> 
        </Tab>
        <Tab eventKey="Women" title="Women Wear">
           <Shoe_card data={Women} />
        </Tab>
        <Tab eventKey="Mercurial" title="Mercurial">
           <Shoe_card data={mercurial} /> 
        </Tab> */}
      </Tabs>
    </div>
  );
};

export default Category_section;
