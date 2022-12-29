import React, { useContext } from 'react';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import UserContext from '../../Helper/UserContext';
import { VerifyOTPConstant } from '../../Constant';
import VerifyOtpContain from '../../Components/Auth/VerifyOtp';

const VerifyOTP = () => {

  const { active } = useContext(UserContext);

  return (
    <>
      <div className='login-section'>
        <div className='materialContainer'>
          <ErrorBox active={active} />
          <div className='box'>
            <div className='login-title mb-4'>
              <h2>{VerifyOTPConstant}</h2>
            </div>
            <VerifyOtpContain />
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
