import React from 'react';
import { Col, Container, Row } from 'reactstrap';
const Footer = () => {
  return (
    <Container fluid={true}>
      <footer className='footer'>
        <Row>
          <Col md='12' className='footer-copyright text-center'>
            <p className='mb-0'>Copyright 2021 © Voxo theme by pixelstrap</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};
export default Footer;
