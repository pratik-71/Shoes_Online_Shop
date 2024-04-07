import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "../../src/Styles/Home_Section.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Slices/ProductSlice";
import axios from "axios";

const Shoe_card = ({ selected_category,display_number }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  // ------------ get all products ---------------



  useEffect(() => {
    get_products();
  }, []);

  const get_products = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/products/all_product"
      );
      if (response) {
        dispatch(setProducts(response.data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  const handle_add_cart=async(item)=>{
    const jwttoken = localStorage.getItem("Auth-Token")
    try {
       console.log(item._id)
      const response = await axios.post("http://localhost:3001/products/add_cart",{
        product : item._id,
        imageURL:item.imageURL,
        title:item.title,
        price:item.price
      },{
        headers:{
          "X-Auth-Token": jwttoken
        }
      })

      if(response){
        console.log("item added succesfully")
        navigate("/Profile/Cart")
      }
    } catch (error) {
      
    }
  }

  const handle_delete = async (id) => {
    console.log(id);
    try {
      const response =  await axios.delete("http://localhost:3001/products/delete_product", {
            data: { product: id } 
        }); 
        if(response){
          get_products()
        }
    } catch (error) {
        console.log(error);
    }
}

  // -------------- Filter product categories ----------------
  let filtered_products =
    selected_category === "All"
      ? products
      : products.filter((data) => data.category === selected_category);

  if(display_number==8){
    filtered_products = filtered_products.slice(0,display_number)  
  }  

  return (
    <>
      <Container className="d-flex justify-content-evenly flex-wrap shoe_card">
        {loading ? (
          <p>Loading...</p>
        ) : filtered_products.length === 0 ? (
          <h5 className="text-center">
            No products found..! .. Try in different category or change the
            filter
          </h5>
        ) : (
          filtered_products.map((item) => (
            <Card style={{ width: "18rem",height:"50vh" }} className="my-3" key={item._id}>
              <div className="image_box">
              <img
                src={item.imageURL}
                alt="shoe image"
                className="shoe_img_holder"
              />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <strong>Rs. {item.price}</strong>
                </Card.Text>
                <div className="d-flex justify-content-center flex-wrap">
                  <Link to={`/product_details/${item._id}`}>
                  <button className=" px-3 py-1 mx-1">Buy now</button>
                  </Link>
                 
                  <Link>
                    <button className=" px-3 py-1 mx-1" onClick={()=>handle_add_cart(item)}>Add to Cart</button>
                  </Link>

                  <Link to={`/Update_product/${item._id}`}>
                  <button className=" px-3 py-1 my-2 mx-1 bg-warning text-black">Modify</button>
                  </Link>
                 
                  
                    <button onClick={()=>handle_delete(item._id)}  className=" px-3 py-1 my-2 mx-1  bg-danger">Delete</button>
                  

                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </>
  );
};

export default Shoe_card;
