import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import { VerifyOTPAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';

const VerifyOTP = () => {
  const router = useRouter();
  const { active, setActive } = useContext(UserContext);
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {
      email: Cookies.get('fpemail'),
      otp: otp,
    };
    const Res = await request({ url: VerifyOTPAPI, method: 'POST', data: updateData });
    if (Res.status === 200) {
      setActive({ status: false });
      Cookies.set('vo', otp);
      router.push('/auth/update_password');
    } else setActive({ status: true, title: Res?.data?.msg });
  };
  return (
    <>
      <div className='login-section'>
        <div className='materialContainer'>
          <ErrorBox active={active} />
          <div className='box'>
            <div className='login-title mb-4'>
              <h2>{'Verify OTP'}</h2>
            </div>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup floating>
                <Input type='number' name='otp' value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='Enter OTP' />
                <Label for='exampleEmail'>{'OTP'}</Label>
              </FormGroup>
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