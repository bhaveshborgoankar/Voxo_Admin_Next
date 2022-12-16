import React from 'react';
import { OrderTimeLineData } from '../../../Data/Orders';

const OrderTimelines = () => {
  return (
    <ol className='progtrckr'>
      {OrderTimeLineData.map((elem) => {
        return (
          <li className={elem.classs} key={elem.id}>
            <h5>{elem.title}</h5>
            <h6>{elem.duration}</h6>
          </li>
        );
      })}
    </ol>
  );
};

export default OrderTimelines;
