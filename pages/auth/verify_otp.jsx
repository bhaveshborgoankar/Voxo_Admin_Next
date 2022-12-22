import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Form, Input } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { VerifyOTPAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';

const VerifyOTP = () => {
  const router = useRouter();
  const { fpEmailCookie, setVoCookie } = useContext(UserContext);
  const [otp, setOtp] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {
      email: fpEmailCookie?.fpemail,
      otp: otp,
    };
    const Res = await request({ url: VerifyOTPAPI, method: 'POST', data: updateData });
    if (Res.status === 200) {
      router.push('/auth/update_password');
      setVoCookie('vo', otp);
    }
  };
  return (
    <>
      <div className='login-section'>
        <div className='materialContainer'>
          <div className='box'>
            <div className='login-title'>
              <h2>{'Verify OTP'}</h2>
            </div>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <div className='input'>
                <Input type='number' name='otp' value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='Enter OTP' />
              </div>
              <div className='button login button-1'>
                <Btn attrBtn={{ type: 'submit' }}>
                  <span>{'Verify'}</span>
                  <i className='fa fa-check'></i>
                </Btn>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

VerifyOTP.getLayout = function getLayout(VerifyOTP) {
  return VerifyOTP;
};

export default VerifyOTP;
