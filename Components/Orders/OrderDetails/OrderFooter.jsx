import React from 'react';
import { Shipping, Subtotal, TotalPrice } from '../../../Constant';

const OrderFooter = () => {
  return (
    <tfoot>
      <tr className='table-order'>
        <td colSpan='3'>
          <h5>{Subtotal} :</h5>
        </td>
        <td>
          <h4>$258.00</h4>
        </td>
      </tr>

      <tr className='table-order'>
        <td colSpan='3'>
          <h5>{Shipping} :</h5>
        </td>
        <td>
          <h4>$12.00</h4>
        </td>
      </tr>

      <tr className='table-order'>
        <td colSpan='3'>
          <h5>Tax(GST) :</h5>
        </td>
        <td>
          <h4>$10.00</h4>
        </td>
      </tr>

      <tr className='table-order'>
        <td colSpan='3'>
          <h4 className='theme-color fw-bold'>{TotalPrice} :</h4>
        </td>
        <td>
          <h4 className='theme-color fw-bold'>$6935.00</h4>
        </td>
      </tr>
    </tfoot>
  );
};

export default OrderFooter;
