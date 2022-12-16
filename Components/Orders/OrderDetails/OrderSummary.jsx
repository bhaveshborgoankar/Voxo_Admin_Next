import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { shippingaddress, summery } from '../../../Constant';
const OrderSummary = () => {
  return (
    <Col xl='4'>
      <div className='order-success'>
        <Row className='g-4'>
          <h4>{summery}</h4>
          <ul className='order-details'>
            <li>Order ID: 5563853658932</li>
            <li>Order Date: October 22, 2018</li>
            <li>Order Total: $907.28</li>
          </ul>

          <h4>{shippingaddress}</h4>
          <ul className='order-details'>
            <li>Gerg Harvell</li>
            <li>568, Suite Ave.</li>
            <li>Austrlia, 235153 Contact No. 48465465465</li>
          </ul>

          <div className='payment-mode'>
            <h4>payment method</h4>
            <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.</p>
          </div>

          <div className='delivery-sec'>
            <h3>
              expected date of delivery: <span>october 22, 2018</span>
            </h3>
            <Link to={'/order_tracking'}>track order</Link>
          </div>
        </Row>
      </div>
    </Col>
  );
};
export default OrderSummary;
