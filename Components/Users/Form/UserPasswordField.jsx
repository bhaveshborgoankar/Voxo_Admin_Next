import React, { Fragment } from 'react';
import { ConfirmPassword, Password } from '../../../Constant';
import DivideInput from '../../CommonComponents/DivideInput';
import FormInputWrapper from '../../CommonComponents/FormInputWrapper';

const UserPasswordField = (props) => {
  const { register, errors } = props;
  return (
    <Fragment>
      <FormInputWrapper title={Password} md='9' lg='10'>
        <DivideInput
          inputtype='input'
          className='form-control'
          type='password'
          name='password'
          register={{ ...register('password', { required: true, minLength: 8 }) }}
          errors={errors.password}
          minnumber={8}
        />
      </FormInputWrapper>

      <FormInputWrapper title={ConfirmPassword} md='9' lg='10'>
        <DivideInput
          inputtype='input'
          className='form-control'
          type='password'
          name='confirm_password'
          register={{ ...register('confirm_password', { required: true, minLength: 8 }) }}
          errors={errors.confirm_password}
          minnumber={8}
        />
      </FormInputWrapper>
    </Fragment>
  );
};

export default UserPasswordField;
