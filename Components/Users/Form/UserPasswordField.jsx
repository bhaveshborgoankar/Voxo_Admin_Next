import React, { Fragment } from 'react';
import { Col, Label, Row } from 'reactstrap';
import { ConfirmPassword, Password } from '../../../Constant';
import DivideInput from '../../CommonComponents/DivideInput';

const UserPasswordField = (props) => {
  const { register, errors } = props;
  return (
    <Fragment>
      <Row className='mb-4 align-items-center'>
        <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Password}*</Label>
        <Col md='9' lg='10'>
          <DivideInput
            inputtype='input'
            className='form-control'
            type='password'
            name='password'
            register={{ ...register('password', { required: true, minLength: 8 }) }}
            errors={errors.password}
            minnumber={8}
          />
        </Col>
      </Row>

      <Row className='mb-4 align-items-center'>
        <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{ConfirmPassword}*</Label>
        <Col md='9' lg='10'>
          <DivideInput
            inputtype='input'
            className='form-control'
            type='password'
            name='confirm_password'
            register={{ ...register('confirm_password', { required: true, minLength: 8 }) }}
            errors={errors.confirm_password}
            minnumber={8}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserPasswordField;
