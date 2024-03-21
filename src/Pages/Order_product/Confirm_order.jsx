import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import shoe from "../../Assets/Section4_All_shoes/air/a_shoe8.png";


const Confirm_order = () => {
  return (
    <div>
      <Container className='my-5'>
        <Row>
       
          <Col>
            <div className="text-center">
                <h4>Product details</h4>
                <Table striped bordered hover> 
                   <tbody>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>Nike Air Jordan</td>
                    </tr>
                    <tr>
                        <td><strong>Category</strong></td>
                        <td>Air Jordan</td>
                    </tr>
                    <tr>
                        <td><strong>Size</strong></td>
                        <td>UK 9</td>
                    </tr>
                    <tr>
                        <td><strong>Price</strong></td>
                        <td>599$</td>
                    </tr>
                    <tr>
                        <td><strong>Quantity</strong></td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td><strong>Total Bill</strong></td>
                        <td>1800$</td>
                    </tr>
                   </tbody>
                </Table>
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
                        <td>Pratik Dabhade</td>
                    </tr>
                    <tr>
                        <td><strong>Phone Number</strong></td>
                        <td>9977668811</td>
                    </tr>
                    <tr>
                        <td><strong>State</strong></td>
                        <td>Maharashtra</td>
                    </tr>
                    <tr>
                        <td><strong>District</strong></td>
                        <td>Raigad</td>
                    </tr>
                    <tr>
                        <td><strong>City</strong></td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td><strong>Road name</strong></td>
                        <td>RCS Road</td>
                    </tr>
                    <tr>
                        <td><strong>Village/Building name</strong></td>
                        <td>RCS Complex</td>
                    </tr>
                    <tr>
                        <td><strong>PIN code</strong></td>
                        <td>539521</td>
                    </tr>
                   </tbody>
                </Table>
          </div>
          </Col>
        </Row>
        <Row>
            <div className="text-center my-3">
                <h5>Your Order will be delieverd in 3rd March</h5>
            </div>
            <div className='text-center'> 
                <button className='px-5 py-2 bg-primary rounded border-0 text-white'>Place Order</button>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Confirm_order
