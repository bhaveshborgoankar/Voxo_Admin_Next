import React from 'react';
import { CardHeader } from 'reactstrap';
const SectionHeader = ({ value, customeClass }) => {
  return (
    <CardHeader className={customeClass}>
      <div className='card-header-title'>
        <h4>{value}</h4>
      </div>
    </CardHeader>
  );
};
export default SectionHeader;
