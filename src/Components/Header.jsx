import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import shoe_logo from "../../src/Assets/Navbar/Shoe_logo.jpg";
import "../../src/Styles/Header_css.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let isAuthenticated = false;
  let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgb-mKD-mTbsShRj58zdW2EimNjZdJWoB-tpvPFAozBo0s50e3bmOkEu93H6YWvrFGiE&usqp=CAU"

  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="my-custom-container d-flex align-items-center"
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
              <Nav className="mx-auto d-flex align-items-center">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/Products/All">SHOP</Nav.Link>
                <Nav.Link href="/Products/Special Edition">SPECIAL-EDITION</Nav.Link>
                <Nav.Link href="/Products/premium">PREMIUM</Nav.Link>
                <Nav.Link href="/Products/Jordan">MEN</Nav.Link>
                <Nav.Link href="/Products/Women High Heel">WOMEN</Nav.Link>
                <Nav.Link href="/Profile/Cart"> <i
                    className="bi bi-bag mx-2 cursor-pointer "
                    style={{ fontSize: "25px", cursor: "pointer" }}
                  ></i>
                 
               </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Form className="d-flex align-items-center">
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

            <Nav className="d-flex align-items-center">
              {isAuthenticated ? (
                <>
                  <Nav.Link href="/Sign_in">
                    <button className="px-3 py-1 btn">Sign-In</button>
                  </Nav.Link>
                  <Nav.Link href="/Sign_up">
                    <button className="px-3 py-1 btn ">Sign-Up</button>
                  </Nav.Link>
                </>
              ) : (
                <>
                 
                 <Dropdown drop="down" align="end" classN>
                    <Dropdown.Toggle
                    
                      variant="link"
                      id="dropdown-button-drop-down-centered"
                      className="p-0 border-0 bg-none"
                      toggleMenu={false}
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div>
                        <img src={image} className="rounded-circle mx-1"
                         style={{ height: "7vh", border: "2px solid black" }} />
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                      <Dropdown.Item href="/Profile/Account">
                        My Account
                      </Dropdown.Item>
                      <Dropdown.Item href="/Profile/Returns_order">
                        Returns and Orders
                      </Dropdown.Item>
                      <Dropdown.Item href="/Profile/Cart">
                        Cart
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
