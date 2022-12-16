import React from 'react';
import { Col } from 'reactstrap';
const OrderProfile = () => {
  return (
    <Col xs='12' className='overflow-hidden'>
      <div className='order-left-image'>
        <div className='tracking-product-image'>
          <img src={require('../../../assets/images/profile/1.jpg')} className='img-fluid w-100' alt='' />
        </div>

        <div className='order-image-contain'>
          <h4>Van Heusen Men's Solid Regular Fit Polo</h4>
          <div className='tracker-number'>
            <p>
              Order Number : <span>W765EWR8568871</span>
            </p>
            <p>
              Brand : <span>Van Heusen</span>
            </p>
            <p>
              Order Placed : <span>June 25, 2021</span>
            </p>
          </div>
          <h5>Your items is on the way. Tracking information will be available within 24 hours.</h5>
        </div>
      </div>
    </Col>
  );
};

export default OrderProfile;
