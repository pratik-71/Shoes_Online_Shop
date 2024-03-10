import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Old_address from './Old_address'
import New_address from './New_address'

const Address_skeleton = () => {
  return (
    <div>
      <Container>
        <Row className='my-5'>
            <Col sm={6} md={6} lg={6} xl={6}>
               <Old_address/>
            </Col>

            <Col>
                <New_address/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Address_skeleton
