import React from 'react'
import { Card, Container } from 'react-bootstrap'
import shoe from "../../Assets/Section4_All_shoes/air/a_shoe4.png"
import shoe1 from "../../Assets/Section4_All_shoes/air/a_shoe5.png"
import { Link } from 'react-router-dom'



const Cart = () => {

  const Cards = [
    {
      image:shoe,
      title:"OXY Air 1",
      description: "The Nike Air Jordan Max comes with comfort that allows you to push your limits without any problem. Crafted with a leather sole and available in various color options.",
      price:500
    },
    {
      image:shoe1,
      title:"OXY Air 2",
      description: "The Nike Air Jordan Max comes with comfort that allows you to push your limits without any problem. Crafted with a leather sole and available in various color options.",
      price:599
    }
  ]

  return (
    <div>
      <h5 className='text-center'>Total : 1099$</h5>
      <Container className="d-flex justify-content-center flex-wrap shoe_card">
        
      {Cards.map((item) => (
            <Card style={{ width: "20rem" }} className="my-2 mx-4 ">
              <img
                src={item.image}
                alt="shoe image"
                className="shoe_img_holder"
              />
              <Card.Body className="text-center">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text><strong>{item.price}$</strong></Card.Text>
                <div className="d-flex flex-column justify-content-between">
                
                    <button className=" px-3 py-1 ">Buy now</button>
            
                    <button className=" px-3 py-1 my-2 bg-danger">Remove from Cart</button>
                 
                </div>
              </Card.Body>
            </Card>
        ))}
        
      </Container>
    </div>
  )
}

export default Cart
