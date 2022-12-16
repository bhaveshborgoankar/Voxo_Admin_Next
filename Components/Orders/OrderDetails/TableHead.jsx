import React from 'react';
import { EditItems, items } from '../../../Constant';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th colSpan='2'>{items}</th>
        <th className='text-end' colSpan='2'>
          <a href='#javascript' className='theme-color'>
            {EditItems}
          </a>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
