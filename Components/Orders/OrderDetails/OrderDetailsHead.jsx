import React from 'react';
import { DateTime, items, OrderNo, TotalCost } from '../../../Constant';

const OrderDetailsHead = () => {
  return (
    <div className='title-header title-header-block package-card'>
      <div>
        <h5>{OrderNo}</h5>
      </div>
      <div className='card-order-section'>
        <ul>
          <li>{DateTime}</li>
          <li>{items}</li>
          <li>{TotalCost}</li>
        </ul>
      </div>
    </div>
  );
};

export default OrderDetailsHead;
