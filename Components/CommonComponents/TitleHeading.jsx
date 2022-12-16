import React from 'react';
import { PlusSquare } from 'react-feather';
import { AddNew } from '../../Constant';

const TitleHeading = ({ btn, title }) => {
  return (
    <>
      {btn ? (
        <div className='title-header title-header-1'>
          <h5>{title}</h5>
          <form className='d-inline-flex'>
            <a href='#javascript' className='align-items-center btn btn-theme'>
              <PlusSquare />
              {AddNew}
            </a>
          </form>
        </div>
      ) : (
        <div className='title-header'>
          <h5>{title}</h5>
        </div>
      )}
    </>
  );
};

export default TitleHeading;
