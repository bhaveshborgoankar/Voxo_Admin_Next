import React from 'react';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { Country, EmailAddress, FirstName, ProductInformation, Submit } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
import FormInput from '../../CommonComponents/FormInput';

const AccountTabData = () => {
  return (
    <Form className='theme-form theme-form-2 mega-form'>
      <div className='card-header-1'>
        <h5>{ProductInformation}</h5>
      </div>

      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{FirstName}</Label>
          <Col md='9' lg='10'>
            <FormInput className='form-control' type='text' />
            {/* <Input className='form-control' type='text' /> */}
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{EmailAddress}</Label>
          <Col md='9' lg='10'>
            <FormInput className='form-control' type='email' />
            {/* <Input className='form-control' type='email' /> */}
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{Country}</Label>
          <Col md='9' lg='10'>
            <FormInput className='form-control' type='text' />
            {/* <Input className='form-control' type='text' /> */}
          </Col>
        </Row>
        <Btn attrBtn={{ className: 'btn-theme theme-bg-color mt-3 d-inline-block w-auto', type: 'button' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};

export default AccountTabData;
