import React, { useState } from 'react';
import { Col, Form, Label, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Country, EmailAddress, FirstName, ProductInformation, Submit } from '../../../Constant';
import FormInput from '../../CommonComponents/FormInput';
const EditForm = ({ data }) => {
  const [userEdit, setUserEdit] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
  });
  const handleChange = (name, value) => {
    console.log('name, value', name, [...userEdit.name, value]);
    // setUserEdit();
  };
  return (
    <Form className='theme-form theme-form-2 mega-form'>
      <div className='card-header-1'>
        <h5>{ProductInformation}</h5>
      </div>

      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{FirstName}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' value={userEdit.name} type='text' name='name' onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{EmailAddress}</Label>
          <Col md='9' lg='10'>
            <FormInput className='form-control' type='email' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{Country}</Label>
          <Col md='9' lg='10'>
            <FormInput className='form-control' type='text' />
          </Col>
        </Row>
        <Btn attrBtn={{ className: 'btn-theme theme-bg-color mt-3 d-inline-block w-auto', type: 'button' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};
export default EditForm;
