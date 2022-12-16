import React from 'react';
import SelectSearch from 'react-select-search';
import { Col, Input, Label, Row } from 'reactstrap';
import { Category, Clothes, Digital, Electronics, MaximumSpend, MinimumSpend, Products, Restriction, Select, Shoes } from '../../../Constant/index';

const RestrictionForm = () => {
  const options = [
    { name: Select, value: '', disabled: true },
    { name: Electronics, value: Electronics },
    { name: Clothes, value: Clothes },
    { name: Shoes, value: Shoes },
    { name: Digital, value: Digital },
  ];
  return (
    <form className='theme-form theme-form-2 mega-form'>
      <div className='card-header-1'>
        <h5>{Restriction}</h5>
      </div>

      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Products}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='text' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-sm-2 col-form-label form-label-title'>{Category}</Label>
          <Col sm='10'>
            <SelectSearch className='select-search' options={options} search={true} name='Access' placeholder='Choose your Category' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{MinimumSpend}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='number' />
          </Col>
        </Row>

        <Row className='align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{MaximumSpend}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='number' />
          </Col>
        </Row>
      </Row>
    </form>
  );
};

export default RestrictionForm;
