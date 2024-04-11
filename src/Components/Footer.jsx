import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Styles/Footer_css.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='Footer'>
      <Container>
        <Row className='py-3'>
          <Col xs={12} sm={6} md={3}>
            <div className='footer-column'>
              <h6><strong>FIND A STORE</strong></h6>
              <h6><strong>BECOME A MEMBER</strong></h6>
              <h6><strong>SEND US FEEDBACK</strong></h6>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <div className='footer-column'>
              <h6><strong>SERVICES</strong></h6>
              <ul>
                <li>News</li>
                <li>Products</li>
                <li>Contact</li>
                <li>Sneakers</li>
              </ul>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <div className='footer-column'>
              <h6><strong>SHOP BY CATEGORY</strong></h6>
              <ul>
                <li>Premium</li>
                <li>Men shoes</li>
                <li>Women wear</li>
                <li>Kids collection</li>
                <li>Mercurial</li>
              </ul>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <div className='footer-column'>
              <p>@ Pratik Dabhade website 2022.1.12</p>
              <div className='social-links'>
                <a href="https://github.com/pratik-71" target='_blank'>
                  <button className='py-1 px-3 rounded border-0'><i class="bi bi-github"></i> GitHub</button>
                </a>
                <a href="https://linkedin.com/in/pratik-dabhade-a9a600175" target='_blank'>
                  <button className='py-1 px-3 rounded border-0 mx-2'><i class="bi bi-linkedin"></i> Linkedin</button>
                </a>
                <a href="https://leetcode.com/pratik___7/" target='_blank'>
                  <button className='py-1 px-3 rounded border-0'><i class="bi bi-file-code-fill"></i> Leetcode</button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
