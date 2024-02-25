import React, { useState } from "react";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import shoe_logo from "../../src/Assets/Navbar/Shoe_logo.jpg";
import "../../src/Styles/Header_css.css";
import { Link } from "react-router-dom";


const Header = () => {
  const [isloggedin,setisloggedin] = useState(false);
  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="my-custom-container mx-3"
        >
          <Container fluid={true}>
            <div className="d-flex align-items-center">
              <img src={shoe_logo} alt="Shoe_logo" className="logo img-fluid" />
              <h2>OXY</h2>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="order-2 mx-2" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/special_edition">SPECIAL-EDITION</Nav.Link>
                <Nav.Link href="#pricing">PREMIUM</Nav.Link>
                <Nav.Link href="#features">MEN</Nav.Link>
                <Nav.Link href="#pricing">WOMEN</Nav.Link>
                <Nav.Link href="#pricing">KIDS</Nav.Link>
                <Nav.Link href="#">SHOP-NOW</Nav.Link>
                <Nav.Link to="/">
                  <div className="cart">
                    <i className="bi bi-bag fs-6 "></i>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {isloggedin ? 
              <h1>nice you are signed in</h1> :
              <Nav className="ms-auto">
                <Nav.Link href="/Sign_in">
                  <button onClick={()=>setisloggedin(!isloggedin)} className="px-3 py-1">Sign-In</button>
                </Nav.Link>
              </Nav>
            }
          
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
