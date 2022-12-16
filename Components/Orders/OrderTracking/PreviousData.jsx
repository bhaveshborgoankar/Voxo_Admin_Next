import React from 'react';
import DataTable from 'react-data-table-component';
import { Col } from 'reactstrap';
import { orderHeadColumn, orderHeadData } from '../../../Data/Orders';

const PreviousData = () => {
  return (
    <Col xs='12' className='overflow-visible'>
      <div className='tracker-table'>
        <div className='table-responsive'>
          <DataTable data={orderHeadData} columns={orderHeadColumn} />
        </div>
      </div>
    </Col>
  );
};

export default PreviousData;
