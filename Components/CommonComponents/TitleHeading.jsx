import Link from 'next/link';
import React from 'react';
import { PlusSquare } from 'react-feather';
import { AddNew } from '../../Constant';

const TitleHeading = ({ btn, title, redirectUrl }) => {
  return (
    <>
      {btn ? (
        <div className='title-header title-header-1'>
          <h5>{title}</h5>
          <form className='d-inline-flex'>
            <Link href={redirectUrl} className='align-items-center btn btn-theme'>
              <PlusSquare />
              {AddNew}
            </Link>
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
