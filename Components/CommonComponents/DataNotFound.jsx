import React from 'react';
import { CommonPath } from '../../Constant';
const DataNotFound = () => {
  return (
    <div className='not-data-found'>
      <img src={`${CommonPath}no-data.png`} className='img-fluid' />
      <h3>No data found</h3>
    </div>
  );
};
export default DataNotFound;
