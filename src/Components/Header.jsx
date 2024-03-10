import React, { useEffect, useState } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import shoe_logo from "../../src/Assets/Navbar/Shoe_logo.jpg";
import "../../src/Styles/Header_css.css";
import { Link } from "react-router-dom";

const Header = () => {

 

  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="my-custom-container mx-3"
        >
          <Container fluid={true}>
            <div className="d-flex align-items-center justify-content-between">
              <img src={shoe_logo} alt="Shoe_logo" className="logo img-fluid" />
              <h2>OXY</h2>
            </div>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="order-2 mx-2"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/special_edition">SPECIAL-EDITION</Nav.Link>
                <Nav.Link href="/Products">PREMIUM</Nav.Link>
                <Nav.Link href="/Products">MEN</Nav.Link>
                <Nav.Link href="/Products">WOMEN</Nav.Link>
                <Nav.Link href="/Products">KIDS</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
            <Form className="d-flex ms-auto">
              <div className="input-group">
                <input
                  type="text"
                  rounded
                  placeholder="Search"
                  className="form-control search-input b-0"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <Button
                  variant="outline-success"
                  id="button-addon2"
                  className="input-group-append bg-primary search-button"
                >
                  <i class="bi bi-search text-white"></i>
                </Button>
              </div>
            </Form>
            
              <Nav className="ms-auto">
               <Nav.Link href="/Sign_in">
               <button
                    className="px-3 py-1 btn"
                  >
                    Sign-In
                  </button>
                
               </Nav.Link>               
               <Nav.Link href="/Sign_up">
               <button
                    className="px-3 py-1 btn "
                  >
                    Sign-Up
                  </button>
                
               </Nav.Link>      
              </Nav>
         
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
