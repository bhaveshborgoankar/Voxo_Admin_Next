import React, { useContext } from 'react';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import UserContext from '../../Helper/UserContext';
import ForgotPasswordContain from '../../Components/ForgotPassword';

const ForgotPassword = () => {
  const { active } = useContext(UserContext);
  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <ErrorBox active={active} />
        <ForgotPasswordContain />
      </div>
    </div>
  );
};

ForgotPassword.getLayout = function getLayout(ForgotPassword) {
  return ForgotPassword;
};
export default ForgotPassword;
