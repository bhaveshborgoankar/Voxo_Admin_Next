import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { Btn } from '../AbstractElements';
import { ForgotPasswordAPI } from '../Constant/APIRoutes';
import request from '../Utils/APIService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async () => {
    if (email !== '') {
      const data = {
        email: email,
      };
      const Res = await request({ url: ForgotPasswordAPI, method: 'POST', data: data });
      setEmail('');
    }
  };
  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <div className='box'>
          <div className='login-title'>
            <h2>{'Forgot Password'}</h2>
          </div>
          <div className='input'>
            <Input type='text' name='name' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' className='is-invalid' id='emailname' />
            <span className='spin'></span>
          </div>
          <div className='button login button-1'>
            <Btn attrBtn={{ onClick: () => handleSubmit() }}>
              <span>{'Send'}</span>
              <i className='fa fa-check'></i>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

ForgotPassword.getLayout = function getLayout(ForgotPassword) {
  return ForgotPassword;
};
export default ForgotPassword;
