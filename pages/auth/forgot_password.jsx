import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Input } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { ForgotPasswordAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';

const ForgotPassword = () => {
  const router = useRouter();
  const { setFpEmailCookie } = useContext(UserContext);
  const [cookie, setCookie] = useCookies(['fpemail']);
  const [email, setEmail] = useState('');
  const handleSubmit = async () => {
    if (email !== '') {
      const data = {
        email: email,
      };
      const Res = await request({ url: ForgotPasswordAPI, method: 'POST', data: data });
      if (Res.status === 200) {
        setFpEmailCookie('fpemail', email);
        router.push('/auth/verify_otp');
      }
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
