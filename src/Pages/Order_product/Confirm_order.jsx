import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import shoe from "../../Assets/Section4_All_shoes/air/a_shoe8.png";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Confirm_order = () => {

    const product = useSelector((state)=>state.products.product_details)
    const address = useSelector((state)=>state.addresses.selected_address)

    console.log(product)
    console.log(address)

  return (
    <div>
      <Container className='my-5'>
        <Row className='text-center'><h3>Review Your Details</h3></Row>
        <Row>
       
          <Col>
            <div className="text-center">
                <h4>Product details</h4>
                <Table striped bordered hover> 
                   <tbody>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>{product.title}</td>
                    </tr>
                    <tr>
                        <td><strong>Category</strong></td>
                        <td>{product.category}</td>
                    </tr>
                    <tr>
                        <td><strong>Size</strong></td>
                        <td>{product.size}</td>
                    </tr>
                    <tr>
                        <td><strong>Price</strong></td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td><strong>Quantity</strong></td>
                        <td>{product.quantity}</td>
                    </tr>
                    <tr>
                        <td><strong>Total Bill</strong></td>
                        <td>{product.quantity * product.price}</td>
                    </tr>
                   </tbody>
                </Table>
                <div className="text-center">
                    <Link to="/products">
                      <button className='bg-warning px-3 py-1 border-0 rounded'>Explore Other products</button>
                    </Link>
                </div>
            </div>
          </Col>
          <Col className="my-auto">
            <img src={shoe} alt="shoe-image" className="img-fluid my-auto" />
          </Col>
          <Col>
          <div className="text-center">
            <h4>Delievery Address</h4>
            <Table striped bordered hover> 
                   <tbody>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>{address.fullname}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone Number</strong></td>
                        <td>{address.phone_number}</td>
                    </tr>
                    <tr>
                        <td><strong>State</strong></td>
                        <td>{address.state}</td>
                    </tr>
                    <tr>
                        <td><strong>District</strong></td>
                        <td>{address.district}</td>
                    </tr>
                    <tr>
                        <td><strong>City / Village</strong></td>
                        <td>{address.city_village}</td>
                    </tr>
                    <tr>
                        <td><strong>Pincode</strong></td>
                        <td>{address.pincode}</td>
                    </tr>
                    <tr>
                        <td><strong>Village / Building name</strong></td>
                        <td>{address.building_village}</td>
                    </tr>
                   </tbody>
                </Table>
                <div className="text-center">
                    <Link to="/address">
                      <button className='bg-warning px-3 py-1 border-0 rounded'>Edit Address</button>
                    </Link>
                </div>
          </div>
          </Col>
        </Row>
        <Row>
            <div className="text-center my-3">
                <h5>Your Order will be delieverd in 3rd March</h5>
            </div>
            <div className='text-center'> 
               <Link to="/Order_placed">
               <button className='px-5 py-2 bg-primary rounded border-0 text-white'>Place Order</button>
               </Link>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Confirm_order
