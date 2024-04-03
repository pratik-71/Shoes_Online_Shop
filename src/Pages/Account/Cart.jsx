import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Cart = () => {

    const [cart,setcart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    const get_cart_data = async () => {
      try {
        const jwttoken = localStorage.getItem("Auth-Token");
        const response = await axios.get("http://localhost:3001/products/get_cart", {
          headers: {
            "X-Auth-Token": jwttoken
          }
        });
        if (response && response.data) {
          setcart(response.data);
          calculateTotalPrice(response.data);

        }
      } catch (error) {
        console.log(error);
      }
    };
    
    const calculateTotalPrice = (cartItems) => {
      const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(totalPrice);
    };
   
    const handle_remove_cart = async (id) => {
      try {
        const jwttoken = localStorage.getItem("Auth-Token");
    
        const response = await axios.delete("http://localhost:3001/products/remove_cart", {
          headers: {
            "X-Auth-Token": jwttoken
          },
          data: { product: id } 
        });
    
        if (response) {
          get_cart_data(); 
        }
      } catch (error) {
        console.error(error);
      }
    };



  useEffect(()=>{
    get_cart_data()
  },[])

  return (
    <div>
      <h5 className='text-center'>Total : {totalPrice} Rs</h5>
      <Container className="d-flex justify-content-center flex-wrap shoe_card">
        
      {cart.map((item) => (
            <Card style={{ width: "20rem", height:"45vh" }} className="my-2 mx-2 ">
              <img
                src={item.imageURL}
                alt="shoe image"
                className="shoe_img_holder"
              />
              <Card.Body className="text-center">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text><strong>Rs. {item.price}</strong></Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                 
                    <Link to={`/product_details/${item.product}`}>
                    <button className=" px-4 py-1 ">Buy now</button>
                    </Link>
                     

                    <button className=" px-3 py-1 my-2 bg-danger" onClick={()=>handle_remove_cart(item.product)}>Remove from Cart</button>
                 
                </div>
              </Card.Body>
            </Card>
        ))}
        
      </Container>
    </div>
  )
}

export default Cart
