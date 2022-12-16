import React from 'react';
import SelectSearch from 'react-select-search';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { AllowFreeShipping, CouponCode, CouponTitle, DiscountType, EnabletheCoupon, EndDates, Fixed, FreeShipping, General, Percent, Quantity, Select, StartDate, Status } from '../../../Constant';

const GeneralForm = () => {
  const options = [
    { name: Select, value: '', disabled: true },
    { name: Percent, value: Percent },
    { name: Fixed, value: Fixed },
  ];
  return (
    <Form className='theme-form theme-form-2 mega-form'>
      <div className='card-header-1'>
        <h5>{General}</h5>
      </div>

      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{CouponTitle}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='text' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{CouponCode}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='number' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{StartDate}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='date' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{EndDates}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='date' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{FreeShipping}</Label>
          <Col md='9'>
            <div className='form-check user-checkbox ps-0'>
              <Input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault' />
              <Label className='form-label-title col-md-2 mb-0'>{AllowFreeShipping}</Label>
            </div>
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{Quantity}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='number' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-sm-2 col-form-label form-label-title'>{DiscountType}</Label>
          <Col sm='10'>
            <SelectSearch className='select-search' options={options} search={true} name='Access' placeholder='Choose your Access' />
          </Col>
        </Row>

        <Row className='align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Status}</Label>
          <Col md='9'>
            <div className='form-check user-checkbox ps-0'>
              <Input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault1' />
              <Label className='form-label-title col-md-2 mb-0'>{EnabletheCoupon}</Label>
            </div>
          </Col>
        </Row>
      </Row>
    </Form>
  );
};

export default GeneralForm;
