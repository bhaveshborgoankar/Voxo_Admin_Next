import React from 'react';
import { Col, Form, Input, Label } from 'reactstrap';
import { ConfirmPassword, EmailAddress, FirstName, Password, ProductInformation } from '../../Constant';
const VendorAccount = () => {
  return (
    <>
      <Form className='theme-form theme-form-2 mega-form'>
        <div className='card-header-1'>
          <h5>{ProductInformation}</h5>
        </div>

        <div className='row g-4'>
          <Col lg='6'>
            <Label htmlFor='fname' className='form-label-title mb-2 form-label'>
              {FirstName}
            </Label>
            <Input type='text' className='form-control' id='fname' />
          </Col>

          <Col lg='6'>
            <Label htmlFor='mail' className='form-label-title mb-2 form-label'>
              {EmailAddress}
            </Label>
            <Input type='email' className='form-control' id='mail' />
          </Col>

          <Col lg='6'>
            <Label className='col-form-label form-label-title mb-2'>{Password}</Label>
            <Input className='form-control' type='password' />
          </Col>

          <Col lg='6'>
            <Label className='col-form-label form-label-title mb-2'>{ConfirmPassword}</Label>
            <Input className='form-control' type='password' />
          </Col>
        </div>
      </Form>
    </>
  );
};
export default VendorAccount;
