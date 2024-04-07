import React from 'react'
import {  Container, Image } from "react-bootstrap";
import {Link} from "react-router-dom"

const Not_found = () => {
  return (
    <div>
      <Container>
          <div className='text-center'>
          <Image src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png"
           style={{height:"50vh",width:"600px"}} />
          </div>
          <div className="text-center">
            <Link to="/">
            <button className='px-3 py-1 rounded border-0 bg-warning text-white mb-5'>Home</button>
            </Link>
          </div>
      </Container>
    </div>
  )
}

export default Not_found
