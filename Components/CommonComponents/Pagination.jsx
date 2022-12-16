import React from 'react';
const Pagination = () => {
  return (
    <div className='pagination-box'>
      <nav className='ms-auto me-auto ' aria-label='...'>
        <ul className='pagination pagination-primary'>
          <li className='page-item disabled'>
            <a className='page-link' href='#javascript'>
              Previous
            </a>
          </li>
          <li className='page-item active'>
            <a className='page-link' href='#javascript'>
              1{' '}
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#javascript'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#javascript'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#javascript'>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
